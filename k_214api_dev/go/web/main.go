package main

import (
	"context"
	"database/sql"
//	"fmt"
	"log"

	_ "github.com/lib/pq"
	"sqlc_package"
	"github.com/gin-gonic/gin"
//	"github.com/myportfolio_k/k_214api_dev/go/web/sqlc/build_sqlc"
)

func main() {

	// DB(PostgreSQL)への接続処理(環境変数導入バージョン)
    cfg := NewConfig()
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Sslmode) // 「dsn」に結合した文字列を格納
 	db, err := sql.Open("postgres", dsn)

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
