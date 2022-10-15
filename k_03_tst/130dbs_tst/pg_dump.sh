#!/bin/bash

# dump
pg_dump -U postgres -Fc postgres > /usr/src/dbstore/backup_`date +%Y%m%d%H%M%S`_"$1".sql
