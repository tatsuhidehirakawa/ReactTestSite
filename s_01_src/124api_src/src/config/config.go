package config

type Config struct {
	Host     string
	User     string
	Port     string
	Password string
	Sslmode  string
}

func NewConfig() *Config {
	return &Config{
		Host:     "134dbs_dev", //本来は各々を環境変数から呼び出すべき
		Port:     "5432",
		User:     "postgres",
		Password: "passw0rd",
		Sslmode:  "disable",
		// os.Getenv("DBHOST")
	}
}

//                           // postgres
// cont := os.Getenv("CONT") // 134dbs_dev
// port := os.Getenv("PORT") // 5432
// user := os.Getenv("USER") // postgres
// 						  // passw0rd
// 						  // disable
