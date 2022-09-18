package main

import (
	"time"
	"database/sql"
	"log" // ?
	"context" // ?
	"github.com/lib/pq" // ?
	"github.com/gowebexamples/sqlc-example/postgres" // ?
	"github.com/gin-gonic/gin"
)

type Account_master struct {
	User_id           string    `json:"user_id"`
	Account_name      string    `json:"account_name"`
	Mail_addless      string    `json:"mail_addless"`
	Password          string    `json:"password"`
	Zip_code          string    `json:"zip_code"`
	Barth_date        time.Time `json:"barth_date"`
	Time_zone         string    `json:"time_zone"`
	Language          string    `json:"language"`
	Status            string    `json:"status"`
	Registration_date time.Time `json:"registration_date"`
}

type Account_attribute struct {
	Account_id        int       `json:"account_id"`
	Update_date       time.Time `json:"update_date"`
	Update_id         string    `json:"update_id"`
	Pic_id_01         string    `json:"pic_id_01"`
	Skill             string    `json:"skill"`
}

func main() {

	/*---sqlc関連行ここから---------------------------------------------------*/
	conn, err := sql.Open("build_sqlc", "user=hoge password=passw0rd dbname=sqlc sslmode=desable")
    if err != nil {
		log.Fatal(err)
	}

	db := build_sqlc.New(conn)

	user, err := db.CreateUser(context.Background(), build_sqlc,CreateUserParams{
	    Firstname: "hoge",
		Lastname: "fuga",
	})
	if err != nil{
		log.Fatal(err)
	}
	log.Println(user)  // 末尾のr.Run()に渡す？

	/*---Gin関連行ここから----------------------------------------------------*/
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {

		account_master := new(Account_master)
		account_master.User_id = "abcde"
		account_master.Account_name = "abcde"
		account_master.Mail_addless = "example@test.go"
		account_master.Password = "passw0rd"
		account_master.Zip_code = "123-4567"
		account_master.Barth_date = time.Now()
		account_master.Time_zone = "Asia/Tokyo"
		account_master.Language = "Japanese"
		account_master.Status = "9"
		account_master.Registration_date = time.Now()

		account_attribute := new(Account_attribute)
		account_attribute.Account_id = 1234
		account_attribute.Update_date = time.Now()
		account_attribute.Update_id = "update_id"
		account_attribute.Pic_id_01 = "pic_id_01"
		account_attribute.Skill = "skill"

		// この2行に違和感（ピリオド結合は？）
		c.JSON(200, account_master)
		c.JSON(200, account_attribute)
	})

	r.Run()
}
