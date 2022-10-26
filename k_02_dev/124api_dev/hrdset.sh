#!/bin/bash

# --- Hot-reload+----+----+----+---+----+----+----+-- #
go install github.com/cosmtrek/air@latest
which air
air init
air
