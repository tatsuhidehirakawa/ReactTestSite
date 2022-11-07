#!/bin/bash

# restore
pg_restore -c -Fc -d postgres -U postgres /usr/src/dbstore/"$1"
