package main

import (
	"database/sql"
	"net/http"

	_ "github.com/lib/pq"
	"github.com/gin-gonic/gin"
)

func main() {

/*--- GETのハンドラ部分を抽出 ------------------*/
getting := func(c *gin.Context) {

	queries := build_sqlc.New(db)
	accountAttribute, err := queries.ListAccount_attribute(context.TODO())

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, accountAttribute)
}

/*--- POSTのハンドラ部分 --------------------*/
posting := func(c *gin.Context) {
	// パラメータのstructオブジェクトを作成
	var attributeParams build_sqlc.CreateAccount_attributeParams
	// 作成したオブジェクトの参照を渡してJSONデータをstructに注入
	c.BindJSON(&attributeParams)
	// DBアクセス用のインスタンスを生成
	queries := build_sqlc.New(db)
	// 第二引数で、先程作成したattributeParamsを渡す
	// ※今回は戻り値のSQLResultは使用しないので、破棄しているが、使用してもOK
	_, err := queries.CreateAccount_attribute(context.TODO(), attributeParams)

	// 以下は任意
	// POST成功がわかりやすいように、成功時はOKを返却し、失敗時はNGとエラー詳細を返却する
	if err == nil {
		c.JSON(http.StatusOK, gin.H{
			"status": "OK",
		})
		} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "NG",
			"detail": err.Error(),
		})
	}
}

/*--- PUTのハンドラ部分 -----------------------*/
putting := func(c *gin.Context) {
	var attributeParams build_sqlc.UpdateAccount_attributeParams
	c.BindJSON(&attributeParams)
	queries := build_sqlc.New(db)
	_, err := queries.UpdateAccount_attribute(context.TODO(), attributeParams)

	if err == nil {
		c.JSON(http.StatusOK, gin.H{
			"status": "OK",
		})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "NG",
			"detail": err.Error(),
		})
	}
}

/*--- DELETEのハンドラ部分 --------------------*/
deleting := func(c *gin.Context) {
	// クエリパラメータからaccountIDを取得
	accountID := c.Param("accountID")
	queries := build_sqlc.New(db)
	err := queries.DeleteAccount_attribute(context.TODO(), accountID)

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, "Successful deletion")

}

}
