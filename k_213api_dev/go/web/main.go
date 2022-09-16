package main

import (
//	"encoding/json"
//	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

// Go構造体「Account_attribute」のデータ型を定義
type Account_attribute struct {
	Account_id  int       `json:"account_id"`
	Update_date time.Time `json:"update_date"`
	Update_id   string    `json:"update_id"`
	Pic_id_01   string    `json:"pic_id_01"`
	Skil        string    `json:"skil"`
}

func main() {

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {

		// Go構造体「Account_attribute」の初期化
		account_attribute := new(Account_attribute)
		account_attribute.Account_id = 1234
		account_attribute.Update_date = time.Now()
		account_attribute.Update_id = "update_id"
		account_attribute.Pic_id_01 = "pic_id_01"
		account_attribute.Skil = "skil"

     // t, _ := json.Marshal(account_attribute) // 「_」は第2戻り値を破棄するブランク変数
     // c.JSON(http.StatusOK, string(t))
        c.JSON(200, account_attribute)
    })

	r.Run()
}