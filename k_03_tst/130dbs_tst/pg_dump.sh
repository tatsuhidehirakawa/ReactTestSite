#!/bin/bash

# dump
pg_dump -U postgres -Fc postgres > backup_`date +%Y%m%d%H%M%S`_134dbs_dev.sql
