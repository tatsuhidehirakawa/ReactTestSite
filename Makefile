#.PHONY:

initall:
	@cd k_01_src && docker compose up -d
	@cd ../k_02_dev && docker compose up -d
	@cd ../k_03_tst && docker compose up -d
	@cd ../k_04_stg && docker compose up -d

initdev/front:
	@docker compose up -d 110wbs_dev

initdev/back:
	@docker compose up -d 124api_dev,134dbs_dev

initdev/bake:
	@docker buildx bake --file docker-bake.hcl myportfolio_k_dev myportfolio_k_tst

inittem:
	@docker compose up 114api_dev, 314dbs_dev

initdev:
	@cd k_914set_dev
	# @docker compose up
	@docker compose up 214api_dev, 314dbs_dev
	# @docker compose up 114wbs_dev

inittst:
	# @cd k_910set_tst
	# @docker compose up

# maketst:
# 	@mkdir testingMakecmd && touch testingMakecmd/testingSuccess.txt
# 	@echo "test success!"
# 	@echo "Please delete testingMakecmd/testingSuccess.txt after maketest success."

prundkr:
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

lookcrlf:
	@cat -e *.sh

rplccrlf:
	@sed -i 's/\r//' *.sh

yyyyyyy:
	@docker exec -it k_904set_dev-214api_dev-1 bash

clonenv:
	@git clone https://github.com/tatsuhidehirakawa/myportfolio_k.git

