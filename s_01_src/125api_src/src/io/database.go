// データベースとの接続
package io

import (
	"STGprd_devpkg/config"
	"fmt"
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type SQLdatabase struct {
	SQLX *sqlx.DB
}

func NewSQLdatabase(cfg *config.Config) (*SQLdatabase, error) {
	fmt.Printf(cfg.Host)
	dsn := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Sslmode)
	db, err := sqlx.Connect("postgres", dsn)
	if err != nil {
		log.Fatalln(err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	return &SQLdatabase{SQLX: db}, nil
}

// cfg := config.NewConfig()
// dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Sslmode) // 「dsn」に結合した文字列を格納
// db, err := sql.Open("postgres", dsn)
