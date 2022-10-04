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
/*
	// DB(PostgreSQL)への接続処理(環境変数導入バージョン)
	cfg := NewConfig()
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Sslmode) // 「dsn」に結合した文字列を格納
 	db, err := sql.Open("postgres", dsn)
*/
 	db, err := sql.Open("postgres", "host=314dbs_dev port=5432 user=postgres password=passw0rd sslmode=disable")

	// DB接続時の例外処理
	if err != nil {
		log.Fatal(err)
	}

	/*--- GETのハンドラ部分を抽出 ------------------*/
	getting := func(c *gin.Context) {

		queries := build_sqlc.New(db)
		accountAttribute, err := queries.ListAccount_attribute(context.TODO())
	
		if err != nil {
			log.Fatal(err)
		}
	
		c.JSON(200, accountAttribute)
	}

	/*--- POSTのハンドラ部分 --------------------*/
	posting := func(c *gin.Context) {

		queries := build_sqlc.New(db)
		accountAttribute, err := queries.ListAccount_attribute(context.TODO())
	
		if err != nil {
			log.Fatal(err)
		}
	
		c.JSON(200, accountAttribute)
	}
	
	/*--------------------------------------------*/

	// Ginの初期化処理
	router := gin.Default()

	router.GET("/someGet", getting)
	router.POST("/somePost", posting)
//	router.PUT("/somePut", putting)
// router.DELETE("/someDelete", deleting)
//	router.PATCH("/somePatch", patching)
//	router.HEAD("/someHead", head)
//	router.OPTIONS("/someOptions", options)

	router.Run()
}
