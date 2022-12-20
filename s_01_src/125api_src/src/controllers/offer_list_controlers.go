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

type OfferList struct {
	db *sql.DB
}

func NewOfferList(db *sql.DB) OfferList {
	return OfferList{db: db}
}

/*--- GETのハンドラ部分を抽出 ------------------*/
func (a OfferList) Get(c *gin.Context) {

	queries := sqlc_pkg.New(a.db)
	OfferList, err := queries.ListOffer_list(context.TODO())

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, OfferList)
}

/*--- POSTのハンドラ部分 --------------------*/
func (a OfferList) Post(c *gin.Context) {
	// パラメータのstructオブジェクトを作成
	var offerParams sqlc_pkg.CreateOffer_listParams
	// 作成したオブジェクトの参照を渡してJSONデータをstructに注入
	c.BindJSON(&offerParams)
	// DBアクセス用のインスタンスを生成
	queries := sqlc_pkg.New(a.db)
	// 第二引数で、先程作成したofferParamsを渡す
	// ※今回は戻り値のSQLResultは使用しないので、破棄しているが、使用してもOK
	_, err := queries.CreateOffer_list(context.TODO(), offerParams)

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
func (a OfferList) Put(c *gin.Context) {
	var offerParams sqlc_pkg.UpdateOffer_listParams
	c.BindJSON(&offerParams)
	queries := sqlc_pkg.New(a.db)
	_, err := queries.UpdateOffer_list(context.TODO(), offerParams)

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
func (a OfferList) Delete(c *gin.Context) {
    // クエリパラメータからaccountIDを取得
    accountID := c.Param("accountID")
    queries := sqlc_pkg.New(a.db)
    err := queries.DeleteOffer_list(context.TODO(), accountID)

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, "Successful deletion")

}
