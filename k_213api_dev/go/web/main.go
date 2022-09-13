package main 

import (
    "github.com/gin-gonic/gin"
)

func main() {

    // *gin.EngineをReturnする関数を宣言…<1>
    router := gin.Default()

    // jsonデータをGETさせる処理…<2>
    router.GET("/", func(c *gin.Context) {
    // GO構造体をjsonに変換する処理…<3>


    // 取り出した値をGO構造体に格納する処理…<4>


    // 値を取り出すSQL文をDBに投げる処理(GORM？)…<5>


    // gin.H{}でgoファイルの変数をHTMLテンプレートに渡す
    c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })

    // サーバを起動する処理…<6>
    router.Run(":3000")
}
