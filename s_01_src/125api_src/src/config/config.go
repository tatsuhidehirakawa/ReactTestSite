package config

import (
	"os"
	// "github.com/sethvargo/go-envconfig"
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

// // add code
// func LoadConfig(ctx context.Context) (*Config, error) {
// 	var cfg Config
// 	if err := envconfig.Process(ctx, &cfg); err != nil {
// 		return nil, err
// 	}

// 	return &cfg, nil
// }
