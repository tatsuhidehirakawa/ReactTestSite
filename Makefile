#.PHONY:

#---[ 1. system boot ]----------------------------------------------------------

init.all: ## Initialize and booting all containers and services.
	@cd k_02_dev && docker compose up -d
	@cd k_03_tst && docker compose up -d
	@cd k_04_stg && docker compose up -d

init.dev.f: ## Booting only frontend devlopment containers.
	@cd k_02_dev && docker compose-up -d 110wbs_dev

init.dev.b: ## Booting only backend devlopment containers.
	@docker compose up -d 124api_dev,134dbs_dev

init.dev.bake: ## Under construction.
	@docker buildx bake --file docker-bake.hcl myportfolio_k_dev myportfolio_k_tst

inittem: ## Under construction.
	@docker compose up 114api_dev, 314dbs_dev

# initdev: ## Under construction.
# 	@cd k_914set_dev
# 	# @docker compose up
# 	@docker compose up 214api_dev, 314dbs_dev
# 	# @docker compose up 114wbs_dev

inittst: ## Under construction.
	# @cd k_910set_tst
	# @docker compose up

#---[ 3. DB backup and restore ]------------------------------------------------

pg_dump: ## Dump db backupfile to local.(cf."meke pg_dump container_name=134dbs_dev")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_dump.sh "$(container_name)" bash

pg_restore: ## Restore by local file.(cf."make pg_restore container_name=130dbs_tst file_name=sample")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_restore.sh "$(file_name)" bash

#---[ 4. system stop ]---------------------------------------------------------

prundkr: ## Under construction.
	@docker container ls -a
	@docker system df
	@docker stop $(docker ps -q)
	@docker system prune --volumes -f
	@docker container prune -f
	@docker image prune -a -f
	@docker builder prune -f
	@docker images -a -f
	@docker container ls -a
	@docker system df

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



#---[ 9. memo ]----------------------------------------------------------------

#---[ 9.1. docker ]------------------------------------------------------------
# https://zenn.dev/sickleaf/articles/99884a12b0489cf21d45
	@docker ps -a | grep dbs | awk '$0=$NF'


