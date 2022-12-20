package controllers

import (
    "context"
    "database/sql"
    "log"
    "net/http"

    "github.com/gin-gonic/gin"
    _ "github.com/lib/pq"
    "github.com/tatsuhidehirakawa/STGprd_devpkg/sqlc/sqlc_pkg"
)

type AccountAttribute struct {
    db *sql.DB
}

func NewAccountAttribute(db *sql.DB) AccountAttribute {
    return AccountAttribute{db: db}
}

/*--- GETのハンドラ部分を抽出 ------------------*/
func (a AccountAttribute) Get(c *gin.Context) {

    queries := sqlc_pkg.New(a.db)
    accountAttribute, err := queries.ListAccount_attribute(context.TODO())

    if err != nil {
        log.Fatal(err)
    }

    c.JSON(200, accountAttribute)
}

/*--- POSTのハンドラ部分 --------------------*/
func (a AccountAttribute) Post(c *gin.Context) {
    // パラメータのstructオブジェクトを作成
    var attributeParams sqlc_pkg.CreateAccount_attributeParams
    // 作成したオブジェクトの参照を渡してJSONデータをstructに注入
    c.BindJSON(&attributeParams)
    // DBアクセス用のインスタンスを生成
    queries := sqlc_pkg.New(a.db)
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
func (a AccountAttribute) Put(c *gin.Context) {
    var attributeParams sqlc_pkg.UpdateAccount_attributeParams
    c.BindJSON(&attributeParams)
    queries := sqlc_pkg.New(a.db)
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
func (a AccountAttribute) Delete(c *gin.Context) {
    // クエリパラメータからaccountIDを取得
    accountID := c.Param("accountID")
    queries := sqlc_pkg.New(a.db)
    err := queries.DeleteAccount_attribute(context.TODO(), accountID)

    if err != nil {
        log.Fatal(err)
    }

    c.JSON(200, "Successful deletion")

}