#.PHONY:

#---[ 1. Test system boot ]-------------------------------------------------------

# init.tst: ## Booting only frontend devlopment containers.
# 	docker exec -it 110wbs_dev npm run build bash
# 	# docker compose --env-file ../tst.env up -d --build --no-cache
# 	docker compose --env-file ../tst.env up --build

# init.tst.wbs:
# 	docker exec -it 110wbs_dev npm run build bash
# 	docker compose --env-file ../tst.env up --build

init.tst.a:
	make init.tst.dbs.a

init.tst.b:
	make init.tst.dbs.b

init.tst.c:
	make init.tst.api
	make init.tst.wbs

init.tst.wbs:
	# cd ../s_03_dev && make init.dev.wbs
	docker compose --env-file ../dev.env build 110wbs_tst --no-cache
	docker compose --env-file ../dev.env up 110wbs_tst -d

init.tst.api:
	docker compose --env-file ../tst.env up 120api_tst -d

init.tst.dbs.a:
	# cd ../s_03_dev && make init.dev.dbs
	docker compose --env-file ../tst.env up 130dbs_tst -d
	# docker compose --env-file ../tst.env up 130dbs_tst -d; docker exec -it 130dbs_tst usr/src/dbstore/pg_restore.sh 134dbs_dev.sql bash

init.tst.dbs.b:
	docker exec -it 130dbs_tst usr/src/dbstore/pg_restore.sh 134dbs_dev.sql bash







# npm -g install serve
# serve -s ./build -p 3001

b.t.a: ## Booting only backend testing containers.
	cp -r ../s_01_src/124api_src/src ./120api_tst
	docker compose up 120api_tst

b.t.d:
	make b.t.d.c
	make.b.t.d.r

b.t.d.c: ## Booting only backend testing containers.
	docker compose up 130dbs_tst -d

b.t.d.r:
	docker exec -it 130dbs_tst /usr/src/dbstore/pg_restore.sh 134dbs_dev.sql bash

b.t: ## Boot All testing containers.
	docker compose up

#---[ 3. Tst env boot ]------------------------------------------------
boot.api.a:
	docker build -f s_05_tst/120api_tst/Dockerfile -t 120api_tst s_01_src/124api_src/src
	cd s_05_tst && docker compose up 120api_tst

boot.api.b:
	cp -r s_01_src/124api_src/src s_05_tst/120api_tst
	cd s_05_tst && docker compose up 120api_tst

#---[ 3. DB backup and restore ]------------------------------------------------

pg_dump: ## Dump db backupfile to local.(cf."meke pg_dump container_name=134dbs_dev")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_dump.sh "$(container_name)" bash

pg_restore: ## Restore by local file.(cf."make pg_restore container_name=130dbs_tst file_name=sample.sql")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_restore.sh "$(file_name)" bash

