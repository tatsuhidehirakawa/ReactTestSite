#.PHONY:

#---[ 1. system init ]-------------------------------------------------------

init.dev: ## Booting only frontend devlopment containers.
	make init.dev.wbs
	make init.dev.api
	make init.dev.dbs

init.dev.wbs: ## Initilazing only frontend devlopment containers.
	docker compose --env-file ../dev.env build 110wbs_dev --no-cache
	docker compose --env-file ../dev.env up 110wbs_dev -d
	make copy.wbs

init.dev.api: ## Booting only frontend devlopment containers.
	docker compose --env-file ../dev.env up 124api_dev -d

init.dev.dbs: ## Booting only frontend devlopment containers.
	docker compose --env-file ../dev.env up 134dbs_dev -d

copy.wbs:
	docker cp ../s_01_src/110wbs_src/public 110wbs_dev:usr/src/app
	docker cp ../s_01_src/110wbs_src/src 110wbs_dev:usr/src/app

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
	@cd s_03_dev/124api_dev && cat -e *.sh

rplccrlf/all:
	@cd s_03_dev/110wbs_dev && sed -i 's/\r//' *.sh
	@cd s_03_dev/124api_dev && sed -i 's/\r//' *.sh

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
	@cd s_03_dev && cd 124api_dev && ls -la && chmod 775 pkgset.sh && ls -la
	@cd s_03_dev && cd 110wbs_dev && ls -la && chmod 775 strset.sh && ls -la
	@cd k_03_tst && cd 130dbs_tst && ls -la && chmod 775 pg_dump.sh && ls -la
	@cd k_03_tst && cd 130dbs_tst && ls -la && chmod 775 pg_restore.sh && ls -la
