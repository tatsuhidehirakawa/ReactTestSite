package main 

import (
    "github.com/gin-gonic/gin"
)

func main() {

    // *gin.EngineをReturnする関数を宣言
    router := gin.Default()

    // jsonデータをGETさせる処理
    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })

    // DBから返ってきたデータをJSONに変換する処理





    // 値を取り出すSQL文を投げる処理





    // サーバを起動する処理
    router.Run(":3000")
}




