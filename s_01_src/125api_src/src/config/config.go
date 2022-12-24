package config

import (
	"os"
)

type Config struct {
	Host     string
	Port     string
	User     string
	Password string
	Sslmode  string
}

func NewConfig() *Config {
	return &Config{
		Host:     os.Getenv("DATABASE_HOST"),
		Port:     os.Getenv("DB_PORT"),
		User:     os.Getenv("USER"),
		Password: os.Getenv("PGSQL_PW"),
		Sslmode:  os.Getenv("SSLMODE"),
	}
}
