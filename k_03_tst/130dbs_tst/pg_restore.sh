#!/bin/bash

# restore
pg_restore -c -Fc -d postgres -U postgres "$1".sql
