package main 

import (
    "github.com/gin-gonic/gin"
)

func main() {
    router := gin.Default()  // *gin.EngineをReturnする関数を宣言

    router.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Hello World",
        })
    })
    
    router.Run(":3000")  // サーバを起動し3000番で待ち受け
}




