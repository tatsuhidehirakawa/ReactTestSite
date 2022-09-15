package main

import (
	"bytes"         // 追加
	"encoding/json" // 追加
	"fmt"           // 追加
	"net/http"      // 追加
	"time"

	"github.com/gin-gonic/gin"
)

type Account_attribute struct {
	account_id  int       `json:"account_id"`
	update_date time.Time `json:"update_date"`
	update_id   string    `json:"update_id"`
	pic_id_01   string    `json:"pic_id_01"`
	skil        string    `json:"skil"`
}

type Account_master struct {
	user_id           string    `json:"user_id"`
	account_name      string    `json:"account_name"`
	mail_addless      string    `json:"mail_addless"`
	password          string    `json:"password"`
	zip_code          string    `json:"zip_code"`
	barth_date        time.Time `json:"barth_date"`
	time_zone         string    `json:"time_zone"`
	language          string    `json:"language"`
	status            string    `json:"status"`
	registration_date string    `json: "registration_date"`
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
		account_attribute.account_id = 1234
		account_attribute.update_date = time.Now()
		account_attribute.update_id = "update_id"
		account_attribute.pic_id_01 = "pic_id_01"
		account_attribute.skil = "skil"

		// Table Name:"account_master"
		account_master := new(Account_master)
		account_master.user_id = "user_id"
		account_master.account_name = "account_name"
		account_master.mail_addless = "mail_addless"
		account_master.password = "password"
		account_master.zip_code = "zip_code"
		account_master.barth_date = time.Now()
		account_master.time_zone = "time_zone"
		account_master.language = "language"
		account_master.status = "status"
		account_master.registration_date = "registration_date"

		// encode json
		account_attribute_json, _ := json.Marshal(account_attribute)
		fmt.Printf("[+] %s\n", string(account_attribute_json))

		// send json
		//// ポイント2, 3
		res, err := http.Post("/", "application/json", bytes.NewBuffer(account_attribute_json))
		defer res.Body.Close()

		if err != nil {
			fmt.Println("[!] " + err.Error())
		} else {
			fmt.Println("[*] " + res.Status)
		}

		// DBから取り出した値をGO構造体に格納する処理…<#003>

		// 値を取り出すSQL文をDBに投げる処理…<#007>

		// gin.H{}でgoファイルの変数をHTMLテンプレートに渡す…<#005>
		c.JSON(http.StatusOK, gin.H{
			"account_id":  account_attribute.account_id,
			"update_date": account_attribute.update_date,
			"update_id":   account_attribute.update_id,
			"pic_id_01":   account_attribute.pic_id_01,
			"skill":       account_attribute.skil,
		})

	})
	router.Run(":3000")
}
