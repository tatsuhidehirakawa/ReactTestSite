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

type PurchaseHistroy struct {
	db *sql.DB
}

func NewPurchaseHistroy(db *sql.DB) PurchaseHistroy {
	return PurchaseHistroy{db: db}
}

/*--- GETのハンドラ部分を抽出 ------------------*/
func (a PurchaseHistroy) Get(c *gin.Context) {

	queries := sqlc_pkg.New(a.db)
	purchaseHistroy, err := queries.ListPurchase_histroy(context.TODO())

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, purchaseHistroy)
}

/*--- POSTのハンドラ部分 --------------------*/
func (a PurchaseHistroy) Post(c *gin.Context) {
	// パラメータのstructオブジェクトを作成
	var purchaseParams sqlc_pkg.CreatePurchase_histroyParams
	// 作成したオブジェクトの参照を渡してJSONデータをstructに注入
	c.BindJSON(&purchaseParams)
	// DBアクセス用のインスタンスを生成
	queries := sqlc_pkg.New(a.db)
	// 第二引数で、先程作成したpurchaseParamsを渡す
	// ※今回は戻り値のSQLResultは使用しないので、破棄しているが、使用してもOK
	_, err := queries.CreatePurchase_histroy(context.TODO(), purchaseParams)

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
func (a PurchaseHistroy) Put(c *gin.Context) {
	var purchaseParams sqlc_pkg.UpdatePurchase_histroyParams
	c.BindJSON(&purchaseParams)
	queries := sqlc_pkg.New(a.db)
	_, err := queries.UpdatePurchase_histroy(context.TODO(), purchaseParams)

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
func (a PurchaseHistroy) Delete(c *gin.Context) {
    // クエリパラメータからaccountIDを取得
    accountID := c.Param("accountID")
    queries := sqlc_pkg.New(a.db)
    err := queries.DeletePurchase_histroy(context.TODO(), accountID)

	if err != nil {
		log.Fatal(err)
	}

	c.JSON(200, "Successful deletion")

}
