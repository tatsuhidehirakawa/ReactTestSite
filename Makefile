#.PHONY:

chmod:
	@cd k_02_dev && cd 124api_dev && ls -la && chmod 775 pkgset.sh && ls -la
	@cd k_02_dev && cd 110wbs_dev && ls -la && chmod 775 strset.sh && ls -la
	@cd k_03_tst && cd 130dbs_tst && ls -la && chmod 775 pg_dump.sh && ls -la
	@cd k_03_tst && cd 130dbs_tst && ls -la && chmod 775 pg_restore.sh && ls -la

#---[ 1. system boot ]-------------------------------------------------------

init.d: ## Booting only frontend devlopment containers.
	@cd k_02_dev && docker compose up -d

init.d.w: ## Booting only frontend devlopment containers.
	@cd k_02_dev && docker compose up -d 110wbs_dev

init.d.a.d: ## Booting only backend devlopment containers.
	# @cd k_02_dev && docker compose up 124api_dev, 134dbs_dev
	@cd k_02_dev && docker compose up 134dbs_dev -d
	@cd k_02_dev && docker compose up 124api_dev -d

init.tst.b: ## Under construction.
	@cd k_03_tst && cd 130dbs_tst && docker compose up -d

init.dev.bake: ## Under construction.
	@docker buildx bake --file docker-bake.hcl myportfolio_k_dev myportfolio_k_tst

inittem: ## Under construction.
	@docker compose up 114api_dev, 314dbs_dev

init.all: ## Initialize and booting all containers and services.
	@cd k_02_dev && docker compose up -d
	@cd k_03_tst && docker compose up -d
	@cd k_04_stg && docker compose up -d

# initdev: ## Under construction.
# 	@cd k_914set_dev
# 	# @docker compose up
# 	@docker compose up 214api_dev, 314dbs_dev
# 	# @docker compose up 114wbs_dev

#---[ 3. DB backup and restore ]------------------------------------------------

pg_dump: ## Dump db backupfile to local.(cf."meke pg_dump container_name=134dbs_dev")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_dump.sh "$(container_name)" bash

pg_restore: ## Restore by local file.(cf."make pg_restore container_name=130dbs_tst file_name=sample.sql")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_restore.sh "$(file_name)" bash


#---[ 5. Validation ]----------------------------------------------------------------

look.crlf.wbs:
	@cd k_02_dev/110wbs_dev && cat -e *.sh

look.crlf.api:
	@cd k_02_dev/124api_dev && cat -e *.sh

rplccrlf/all:
	@cd k_02_dev/110wbs_dev && sed -i 's/\r//' *.sh
	@cd k_02_dev/124api_dev && sed -i 's/\r//' *.sh

yyyyyyy:
	@docker exec -it k_904set_dev-214api_dev-1 bash

clonenv:
	@git clone https://github.com/tatsuhidehirakawa/myportfolio_k.git

persist:
	@cd k_02_dev && 110wbs_dev && rm strset.sh
	@cd ../../k_01_src/k110wbs && git add package.json, package-lock.json

#---[ 8. Git add ]-------------------------------------------------------------

git.add.norm:  ## Addition of git (cf. make git.add.norm)
	@git status
	@git add Makefile
	@git status

git.add.param:  ## Addition of git (cf. make git.add.param)
	@git status
	@git add k_01_src/110wbs_src/package.json
	@git add k_01_src/110wbs_src/package-lock.json
	@git add k_01_src/124api_src/src/mod.go
	@git add k_01_src/124api_src/src/sqlc/build_sqlc/db.go
	@git add k_01_src/124api_src/src/sqlc/build_sqlc/go.mod
	@git add k_01_src/124api_src/src/sqlc/build_sqlc/models.go
	@git add k_01_src/124api_src/src/sqlc/build_sqlc/query.sql.go
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



debug: ## Debug code removal
