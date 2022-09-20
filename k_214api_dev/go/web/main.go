package main

import (
	"context"
	"database/sql"
	"log"

	_ "github.com/lib/pq"

	"github.com/gin-gonic/gin"
	"github.com/myportfolio_k/k_214api_dev/go/web/sqlc/build_sqlc"
)

func main() {

    // DB(PostgreSQL)への接続処理
	db, err := sql.Open("postgres", "host=314dbs_dev port=5432 user=postgres password=passw0rd sslmode=disable")

    // DB接続時の例外処理
	if err != nil {
		log.Fatal(err)
	}

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
