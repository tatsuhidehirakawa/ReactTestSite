// package controllers

// import (
// 	"encoding/json"
// 	"net/http"

// 	"github.com/gin-gonic/gin"
// 	_ "github.com/lib/pq"
// )

// func LoginCheckMiddleware() gin.HandlerFunc {
// 	return func(c *gin.Context) {
// 		session := sessions.Default(c)
// 		// Json文字列がinterdace型で格納されている。dproxyのライブラリを使用して値を取り出す
// 		loginUserJson, err := dproxy.New(session.Get("loginUser")).String()

// 		if err != nil {
// 			c.Status(http.StatusUnauthorized)
// 			c.Abort()
// 		} else {
// 			var loginInfo model.AuthUser
// 			// Json文字列のアンマーシャル
// 			err := json.Unmarshal([]byte(loginUserJson), &loginInfo)
// 			if err != nil {
// 				c.Status(http.StatusUnauthorized)
// 				c.Abort()
// 			} else {
// 				c.Next()
// 			}
// 		}
// 	}
// }
