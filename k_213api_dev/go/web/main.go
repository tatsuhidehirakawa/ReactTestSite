package main 

import (
    "github.com/gin-gonic/gin"
    "bytes"                      // 追加
    "encoding/json"              // 追加
    "fmt"                        // 追加
    "net/http"                   // 追加
)

func main() {

    // *gin.EngineをReturnする関数を宣言
    router := gin.Default()

/*---GET処理-----+-----+-----+-----+-----+-----+-----+-----+---*/
    // jsonデータをGETさせる処理
    router.GET("/", func(c *gin.Context) {

    // GO構造体をjsonに変換する処理…<1>
    type txjsn struct {
        // Table Name:"account_attribute"
        account_id int `json: "account_id"`
        update_date timestamp `json: "update_date"`
        update_id string `json: "update_id"`
        pic_id_01 string `json: "pic_id_01"`
        skil string `json: "skil"`
        // Table Name:"account_master"
        user_id string `json: "user_id"`
        account_name string `json: "account_name"`
        mail_addless string `json: "mail_addless"`
        password string `json: "password"`
        zip_code string `json: "zip_code"`
        barth_date timestamp `json: "barth_date"`
        time_zone string `json: "time_zone"`
        language string `json: "language"`
        status string `json: "status"`
        registration_date string `json: "registration_date"`
    }

    func main() {
        // Table Name:"account_attribute"
        txjsn := new(txjsn)
        txjsn.account_id = "5e9nr6eka93u"
        txjsn.update_date = "09/07/22"
        txjsn.update_id = "5e9nr6eka93u"
        txjsn.pic_id_01 = "5e9nr6eka93u"
        txjsn.skil = "SystemAdministrator"
        // Table Name:"account_master"
        txjsn.user_id = "5e9nr6eka93u"
        txjsn.account_name = "Admin"
        txjsn.mail_addless = "Admin@example.com"
        txjsn.password = "a4cjuzn2"
        txjsn.zip_code = "123-4567"
        txjsn.barth_date = "09/07/22"
        txjsn.time_zone = "Asia/Tokyo"
        txjsn.language = "Japanese"
        txjsn.status = "9"
        txjsn.registration_date = "09/07/22"

        // encode json
        txjsn_json, _ := json.Marshal(txjsn)
        fmt.Printf("[+] %s\n", string(txjsn_json))

        // send json
        //// ポイント2, 3
        res, err := http.Post(URL, "application/json", bytes.NewBuffer(txjsn_json))
        defer res.Body.Close()

        if err != nil {
            fmt.Println("[!] " + err.Error())
        } else {
            fmt.Println("[*] " + res.Status)
        }
    }


    // DBから取り出した値をGO構造体に格納する処理…<3>



    // 値を取り出すSQL文をDBに投げる処理…<7>



    // gin.H{}でgoファイルの変数をHTMLテンプレートに渡す…<5>
    c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })
/*---POST処理----+-----+-----+-----+-----+-----+-----+-----+---*/
    // jsonデータをPOSTさせる処理
    router.POST("/", func(c *gin.Context) {

    // jsonをGO構造体に変換する処理…<2>



    // GO構造体から取り出した値をDBに格納する処理…<4>



    // 値を取り出すSQL文をDBに投げる処理…<8>



    // gin.H{}でHTMLテンプレートからgoファイルの変数を受け取る…<6>
    c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })
/*---+-----+-----+-----+-----+-----+-----+-----+-----+-----+---*/
    // サーバを起動する処理
    router.Run(":3000")
}
