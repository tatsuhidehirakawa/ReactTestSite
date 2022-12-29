package config

import (
	"context"

	"github.com/sethvargo/go-envconfig"
)

type Config struct {
	Host     string `env:"DATABASE_HOST"`
	Port     string `env:"DB_PORT"`
	User     string `env:"USER"`
	Password string `env:"PGSQL_PW"`
	Sslmode  string `env:"SSLMODE"`
}

// func NewConfig() *Config {
// 	return &Config{
// 		Host:     os.Getenv("DATABASE_HOST"),
// 		Port:     os.Getenv("DB_PORT"),
// 		User:     os.Getenv("USER"),
// 		Password: os.Getenv("PGSQL_PW"),
// 		Sslmode:  os.Getenv("SSLMODE"),
// 	}
// }

func LoadConfig(ctx context.Context) (*Config, error) {
	var cfg Config
	if err := envconfig.Process(ctx, &cfg); err != nil {
		return nil, err
	}

	return &cfg, nil
}
