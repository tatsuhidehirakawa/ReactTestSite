#.PHONY:

#---[ 1. system boot ]-------------------------------------------------------

init.stg: ## Booting only frontend devlopment containers.
	@docker compose --env-file ../tst.env up

#---[ 3. DB backup and restore ]------------------------------------------------

pg_dump: ## Dump db backupfile to local.(cf."meke pg_dump container_name=134dbs_dev")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_dump.sh "$(container_name)" bash

pg_restore: ## Restore by local file.(cf."make pg_restore container_name=130dbs_tst file_name=sample.sql")
	@docker exec -it "$(container_name)" /usr/src/dbstore/pg_restore.sh "$(file_name)" bash

#---[ 4. Repository build and destroy ]---------------------------------------------

#---[ 8. Git add ]-------------------------------------------------------------

#---[ 9. memo ]----------------------------------------------------------------

#---[ 9.1. docker ]------------------------------------------------------------
