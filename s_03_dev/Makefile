#.PHONY:

#---[ 0. Custom Params ]-----------------------------------------------

WBS_CONT:=110wbs_dev
# API_CONT:=124api_dev    ## REST API Server
API_CONT:=125api_dev    ## GraphQL Server
DBS_CONT:=134dbs_dev

STAND_BY:=sleep         ## for Mac and Linux
CONNECTOR:=-            ## for Mac and Linux
# STAND_BY:=timeout       ## for Windows
# CONNECTOR:=_            ## for Windows

BACKUP_DATA:=backup_20221230010728_134dbs_dev.sql
PASS_DEV_ENV:=../dev.env

#---[ 1. System Initialize ]-----------------------------------------------

init.dev: ## Initializing only frontend devlopment containers.
	make init.dev.dbs
	make init.dev.api
	make init.dev.wbs
	@echo "Succeful initializing devlopment environment!"

init.dev.dbs: ## Booting only frontend devlopment containers.
	docker compose --env-file ../dev.env up 134dbs_dev -d

init.dev.api.rest: ## Booting only frontend devlopment containers.
	docker compose --env-file ../dev.env up 124api_dev -d
	@make init.sqlc

init.dev.api: ## Booting only frontend devlopment containers.
	docker compose --env-file ../dev.env up 125api_dev -d

init.dev.wbs: ## Initilazing only frontend devlopment containers.
	docker compose --env-file ../dev.env up 110wbs_dev -d
	@make init.tailwindcss

#---[ 2. System Boot ]------------------------------------------------------

boot.dev:
	make boot.dev.dbs
	make boot.dev.api
	make boot.dev.wbs
	@echo "Succeful booting devlopment environment!"

boot.dev.back:
	make boot.dev.dbs
	make boot.dev.api

boot.dev.dbs: ## Booting only frontend devlopment containers.
	@make init.dev.dbs
	$(STAND_BY) 5
	make insert.data.dbs

boot.dev.api: ## Booting only frontend devlopment containers.
	@make init.dev.api

boot.dev.wbs: ## Initilazing only frontend devlopment containers.
	@make init.dev.wbs
	@make insert.code.wbs

#---[ 3. Container manipulation. ]-------------------------------------------

insert.code.wbs:
	@docker cp ../s_01_src/110wbs_src/public 110wbs_dev:usr/src/app
	@docker cp ../s_01_src/110wbs_src/src 110wbs_dev:usr/src/app

init.gqlgen:
	docker exec -it 125api_dev go mod tidy

# init.gqlgen:
# 	docker exec -it 125api_dev go mod tidy
# 	docker exec -it 125api_dev go run github.com/99designs/gqlgen init
# 	docker cp ../s_03_dev/125api_dev/GraphQL/schema.graphqls 125api_dev:/go/src/graph
# 	docker exec -itd 125api_dev go run server.go

init.sqlc:
	docker exec -it 124api_dev go install github.com/kyleconroy/sqlc/cmd/sqlc@latest
	docker exec -it 124api_dev sqlc generate --file sqlc/sqlc.yaml

init.tailwindcss:
	@docker container exec -it 110wbs_dev npm install -D tailwindcss@3.2.4 postcss@8.4.19 autoprefixer@10.4.13
	@docker cp ../s_03_dev/110wbs_dev/TailwindCSS/postcss.config.js 110wbs_dev:usr/src/app
	@docker cp ../s_03_dev/110wbs_dev/TailwindCSS/tailwind.config.js 110wbs_dev:usr/src/app
	@docker cp ../s_03_dev/110wbs_dev/TailwindCSS/index.css 110wbs_dev:usr/src/app/src
	@docker restart 110wbs_dev

insert.data.dbs:
	@docker exec -it 134dbs_dev /usr/src/dbstore/pg_restore.sh $(BACKUP_DATA) bash

eject.data.wbs:
	@docker cp 110wbs_dev:usr/src/app/ ../s_01_src/110wbs_src/

eject.data.dbs:
	docker exec -it 134dbs_dev /usr/src/dbstore/pg_dump.sh 134dbs_dev bash

eject.data.api:
	@docker cp $(API_CONT):/go/src ../s_01_src/125api_src

init.dev.adm:
	docker compose --env-file ../dev.env up 135adm_dev -d

generate.gqlgen:
	@docker container exec -it 125api_dev go generate ./...

generate.gqlgen.k:
	@docker container exec -it 125api_dev go run github.com/99designs/gqlgen

recon.dev.wbs: ## Variable "c" is "_(Windows)" or "-(Mac)".
	docker stop 110wbs_dev
	docker rm 110wbs_dev
	docker rmi s_03_dev$(CONNECTOR)110wbs_dev
	docker volume rm s_03_dev_wbs-vol
	docker compose --env-file ../dev.env build 110wbs_dev --no-cache
	docker compose --env-file ../dev.env up 110wbs_dev -d
	@make init.tailwindcss
	@make insert.code.wbs

recon.dev.api:
	@docker stop $(API_CONT)
	@docker rm $(API_CONT)
	@docker rmi s_03_dev-$(API_CONT)
	@docker volume rm s_03_dev_api-vol
	# @make init.dev.api


# pill_codedowncopy.dev.wbs: ## Command to copy source code modified in a container to local.
# 	@docker cp 110wbs_dev:usr/src/app/public ../s_01_src/110wbs_src
# 	@docker cp 110wbs_dev:usr/src/app/src ../s_01_src/110wbs_src
# 	@docker cp 110wbs_dev:usr/src/app/package.json ../s_01_src/110wbs_src
# 	@docker cp 110wbs_dev:usr/src/app/package-lock.json ../s_01_src/110wbs_src
# 	@docker cp 110wbs_dev:usr/src/app/.gitignore ../s_01_src/110wbs_src
# 	@echo "User sorce code was Downloded..."

build.react: ## Create frontend production files.
	docker exec -it 110wbs_dev npm run build bash


# use env file
# docker compose --env-file ../.env up 134dbs_dev


# initdev: ## Under construction.
# 	@cd k_914set_dev
# 	# @docker compose up
# 	@docker compose up 214api_dev, 314dbs_dev
# 	# @docker compose up 114wbs_dev

#---[ 3. Tst env boot ]------------------------------------------------
boot.api.a:
	docker build -f k_03_tst/120api_tst/Dockerfile -t 120api_tst s_01_src/124api_src/src
	cd k_03_tst && docker compose up 120api_tst

boot.api.b:
	cp -r s_01_src/124api_src/src k_03_tst/120api_tst
	cd k_03_tst && docker compose up 120api_tst

#---[ 3. DB backup and restore ]------------------------------------------------

pg_dump: ## Dump db backupfile to local.(cf."meke pg_dump container_name=134dbs_dev")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_dump.sh "$(container_name)" bash

pg_restore: ## Restore by local file.(cf."make pg_restore container_name=130dbs_tst file_name=sample.sql")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_restore.sh "$(file_name)" bash

#---[ 4. Repository build and destroy ]---------------------------------------------

destroy: ## Destroy all Docker image, container and caches.  
	@docker container ls -a
	@docker system df
	docker stop `docker ps -q`
	@docker system prune --volumes -f
	@docker container prune -f
	@docker image prune -a -f
	@docker builder prune -f
	@docker images -a -f
	@docker container ls -a
	@docker system df

clean:
	@git clean -df .
	@cd s_01_src && cd 110wbs_src && rm -R node_modules

destroy.w: ## (For Windows!)Destroy all Docker image, container and caches.  
	@docker container ls -a; docker system df; docker stop $(docker ps -q); docker system prune --volumes -f; docker container prune -f; docker image prune -a -f; docker builder prune -f; docker images -a -f; docker container ls -a; docker system df

#---[ 5. Validation ]----------------------------------------------------------------

look.crlf.wbs:
	@cd s_03_dev/110wbs_dev && cat -e *.sh

look.crlf.api:
	@cd s_03_dev/$(API_CONT) && cat -e *.sh

rplccrlf/all:
	@cd s_03_dev/110wbs_dev && sed -i 's/\r//' *.sh
	@cd s_03_dev/$(API_CONT) && sed -i 's/\r//' *.sh

yyyyyyy:
	@docker exec -it k_904set_dev-214api_dev-1 bash

clonenv:
	@git clone https://github.com/tatsuhidehirakawa/STGprd_devpkg.git

persist:
	@cd s_03_dev && 110wbs_dev && rm strset.sh
	@cd ../../s_01_src/k110wbs && git add package.json, package-lock.json

#---[ 8. Git add ]-------------------------------------------------------------

git.add.norm:  ## Addition of git (cf. make git.add.norm)
	@git status
	@git add Makefile
	@git status

git.add.param:  ## Addition of git (cf. make git.add.param)
	@git status
	@git add s_01_src/110wbs_src/package.json
	@git add s_01_src/110wbs_src/package-lock.json
	@git add s_01_src/124api_src/src/mod.go
	@git add s_01_src/124api_src/src/sqlc/build_sqlc/db.go
	@git add s_01_src/124api_src/src/sqlc/build_sqlc/go.mod
	@git add s_01_src/124api_src/src/sqlc/build_sqlc/models.go
	@git add s_01_src/124api_src/src/sqlc/build_sqlc/query.sql.go
	@git status

#---[ 9. memo ]----------------------------------------------------------------

#---[ 9.1. docker ]------------------------------------------------------------
# https://zenn.dev/sickleaf/articles/99884a12b0489cf21d45
	@docker ps -a | grep dbs | awk '$0=$NF'


#---[ 10. make test ]----------------------------------------------------------

vall:
	@make -v && git -v && docker -v

test.s:
	@touch test.txt

test.e:
	@rm test.txt


exec:
	@docker exec -it 134dbs_dev bash




chmod:
	@cd s_03_dev && cd $(API_CONT) && ls -la && chmod 775 pkgset.sh && ls -la
	@cd s_03_dev && cd 110wbs_dev && ls -la && chmod 775 strset.sh && ls -la
	@cd k_03_tst && cd 130dbs_tst && ls -la && chmod 775 pg_dump.sh && ls -la
	@cd k_03_tst && cd 130dbs_tst && ls -la && chmod 775 pg_restore.sh && ls -la
