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

	/*---sqlc関連行ここから---------------------------------------------------*/
	db, err := sql.Open("build_sqlc", "user=hoge password=passw0rd dbname=sqlc sslmode=desable")
	if err != nil {
		log.Fatal(err)
	}

	if err != nil {
		log.Fatal(err)
	}
	//log.Println(user) // 末尾のr.Run()に渡す？

	/*---Gin関連行ここから----------------------------------------------------*/
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {

		queries := build_sqlc.New(db)
		accountAttribute, err := queries.ListAccount_attribute(context.TODO())

		if err != nil {
			log.Fatal(err)
		}

		c.JSON(200, accountAttribute)
	})

	r.Run()
}
