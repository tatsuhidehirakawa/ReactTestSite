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

type OfferMaster struct {
	db *sql.DB
}

func NewOfferMaster(db *sql.DB) OfferMaster {
	return OfferMaster{db: db}
}

/*--- GETのハンドラ部分を抽出 ------------------*/
func (a OfferMaster) Get(c *gin.Context) {

	queries := sqlc_pkg.New(a.db)
	offerMaster, err := queries.ListOffer_master(context.TODO())

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, offerMaster)
}

/*--- POSTのハンドラ部分 --------------------*/
func (a OfferMaster) Post(c *gin.Context) {
	// パラメータのstructオブジェクトを作成
	var masterParams sqlc_pkg.CreateOffer_masterParams
	// 作成したオブジェクトの参照を渡してJSONデータをstructに注入
	c.BindJSON(&masterParams)
	// DBアクセス用のインスタンスを生成
	queries := sqlc_pkg.New(a.db)
	// 第二引数で、先程作成したmasterParamsを渡す
	// ※今回は戻り値のSQLResultは使用しないので、破棄しているが、使用してもOK
	_, err := queries.CreateOffer_master(context.TODO(), masterParams)

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
func (a OfferMaster) Put(c *gin.Context) {
	var masterParams sqlc_pkg.UpdateOffer_masterParams
	c.BindJSON(&masterParams)
	queries := sqlc_pkg.New(a.db)
	_, err := queries.UpdateOffer_master(context.TODO(), masterParams)

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
func (a OfferMaster) Delete(c *gin.Context) {
    // クエリパラメータからaccountIDを取得
    accountID := c.Param("accountID")
    queries := sqlc_pkg.New(a.db)
    err := queries.DeleteOffer_master(context.TODO(), accountID)

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, "Successful deletion")

}
