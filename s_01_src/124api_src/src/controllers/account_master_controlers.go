package controllers

import (
    "context"
    "database/sql"
    "log"
    "net/http"
    // "strconv"
    
    "github.com/gin-gonic/gin"
    _ "github.com/lib/pq"
    "github.com/tatsuhidehirakawa/STGprd_devpkg/sqlc/sqlc_pkg"
)

type AccountMaster struct {
    db *sql.DB
}

func NewAccountMaster(db *sql.DB) AccountMaster {
    return AccountMaster{db: db}
}

/*--- GETのハンドラ部分を抽出 ------------------*/
func (a AccountMaster) Get(c *gin.Context) {

    queries := sqlc_pkg.New(a.db)
    accountMaster, err := queries.ListAccount_master(context.TODO())

    if err != nil {
        log.Fatal(err)
    }

    c.JSON(200, accountMaster)
}

/*--- POSTのハンドラ部分 --------------------*/
func (a AccountMaster) Post(c *gin.Context) {
    // パラメータのstructオブジェクトを作成
    var masterParams sqlc_pkg.CreateAccount_masterParams
    // 作成したオブジェクトの参照を渡してJSONデータをstructに注入
    c.BindJSON(&masterParams)
    // DBアクセス用のインスタンスを生成
    queries := sqlc_pkg.New(a.db)
    // 第二引数で、先程作成したmasterParamsを渡す
    // ※今回は戻り値のSQLResultは使用しないので、破棄しているが、使用してもOK
    _, err := queries.CreateAccount_master(context.TODO(), masterParams)

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
func (a AccountMaster) Put(c *gin.Context) {
    var masterParams sqlc_pkg.UpdateAccount_masterParams
    c.BindJSON(&masterParams)
    queries := sqlc_pkg.New(a.db)
    _, err := queries.UpdateAccount_master(context.TODO(), masterParams)

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
func (a AccountMaster) Delete(c *gin.Context) {
    // クエリパラメータからaccountIDを取得
    accountID := c.Param("accountID")
    queries := sqlc_pkg.New(a.db)
    err := queries.DeleteAccount_master(context.TODO(), accountID)

    if err != nil {
        log.Fatal(err)
    }

    c.JSON(200, "Successful deletion")

}