package main

import (
	// 追加
	// 追加
	// 追加
	"encoding/json"
	"net/http" // 追加
	"time"

	"github.com/gin-gonic/gin"
)

type Account_attribute struct {
	Account_id  int       `json:"account_id"`
	Update_date time.Time `json:"update_date"`
	Update_id   string    `json:"update_id"`
	Pic_id_01   string    `json:"pic_id_01"`
	Skil        string    `json:"skil"`
}

func main() {

	// *gin.EngineをReturnする関数を宣言
	router := gin.Default()

	/*---GET処理-----+-----+-----+-----+-----+-----+-----+-----+---*/
	// jsonデータをGETさせる処理
	router.GET("/", func(c *gin.Context) {

		// GO構造体からjsonに変換する処理…<#001>

		// Table Name:"account_attribute"
		account_attribute := new(Account_attribute)
		account_attribute.Account_id = 1234
		account_attribute.Update_date = time.Now()
		account_attribute.Update_id = "update_id"
		account_attribute.Pic_id_01 = "pic_id_01"
		account_attribute.Skil = "skil"

		t, _ := json.Marshal(account_attribute)
		c.JSON(http.StatusOK, string(t))
	})
	router.Run(":3000")
}
