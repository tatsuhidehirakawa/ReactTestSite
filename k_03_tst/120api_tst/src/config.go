package main

type Config struct {
	Host     string
	User     string
	Port     string
	Password string
	Sslmode  string
}

func NewConfig() *Config {
	return &Config{
		Host:     "314dbs_dev", //本来は各々を環境変数から呼び出すべき
		Port:     "5432",
		User:     "postgres",
		Password: "passw0rd",
		Sslmode:  "disable",
		// os.Getenv("DBHOST")
	}
}
