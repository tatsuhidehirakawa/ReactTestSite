package main

import (
	"context"
	"database/sql"
//	"fmt"
	"log"

	_ "github.com/lib/pq"
	"github.com/gin-gonic/gin"

	"sqlc_pkg"
)

func main() {

	// DB(PostgreSQL)への接続処理(環境変数導入バージョン)
	cfg := NewConfig()
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Sslmode) // 「dsn」に結合した文字列を格納
 	db, err := sql.Open("postgres", dsn)
/*
 	db, err := sql.Open("postgres", "host=314dbs_dev port=5432 user=postgres password=passw0rd sslmode=disable")
*/
	// DB接続時の例外処理
	if err != nil {
		log.Fatal(err)
	}

	// Ginの初期化処理
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {

		queries := build_sqlc.New(db)
		accountAttribute, err := queries.ListAccount_attribute(context.TODO())

		if err != nil {
			log.Fatal(err)
		}

		c.JSON(200, accountAttribute)
	})

	// サーバの起動処理(8080番)
	r.Run()
}
