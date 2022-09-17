package main

import (
	"time"
 // "database/sql"
	"github.com/gin-gonic/gin"
)

// Go構造体「Account_attribute」のデータ型を定義
type Account_attribute struct {
	Account_id  int       `json:"account_id"`
	Update_date time.Time `json:"update_date"`
	Update_id   string    `json:"update_id"`
	Pic_id_01   string    `json:"pic_id_01"`
	Skill       string    `json:"skill"`
}

/*
type account_master struct {
	user_id           string    `json:"user_id"`
	account_name      string    `json:"account_name"`
	Update_id         string    `json:"mail_addless"`
	password          string    `json:"password"`
	zip_code          string    `json:"zip_code"`
	barth_date        string    `json:"barth_date"`
	time_zone         string    `json:"time_zone"`
	language          string    `json:"language"`
	status            string    `json:"status"`
	registration_date time.Time `json:"registration_date"`
}
*/

func main() {

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {

		// Go構造体「Account_attribute」の初期化
		account_attribute := new(Account_attribute)
		account_attribute.Account_id = 1234
		account_attribute.Update_date = time.Now()
		account_attribute.Update_id = "update_id"
		account_attribute.Pic_id_01 = "pic_id_01"
		account_attribute.Skill = "skill"

        c.JSON(200, account_attribute)
    })

	r.Run()
}