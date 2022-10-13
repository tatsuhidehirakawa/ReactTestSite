#!/bin/bash



# pg_dump
pg_dump -U postgres -d sample_db > backup_file.txt
# pg_restore
psql -U postgres -d sample_db < backup_file.txt
