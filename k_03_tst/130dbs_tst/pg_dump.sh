#!/bin/bash

# dump
pg_dump -U postgres -Fc postgres > /usr/src/dbstore/backup_`date +%Y%m%d%H%M%S`_134dbs_dev.sql
