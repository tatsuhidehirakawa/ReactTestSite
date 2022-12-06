package main

import (
    "database/sql"
    "time"
    "fmt"

	"log"
	"net/http"

    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    _ "github.com/lib/pq"
    "github.com/tatsuhidehirakawa/STGprd_devpkg/controllers"
    "github.com/tatsuhidehirakawa/STGprd_devpkg/config"
)

func main() {

	cfg := config.NewConfig()
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Sslmode) // 「dsn」に結合した文字列を格納
	db, err := sql.Open("postgres", dsn)

	accountMasterController := controllers.NewAccountMaster(db)
    accountAttributeController := controllers.NewAccountAttribute(db)
    offerListController := controllers.NewOfferList(db)
	purchaseHistroyController := controllers.NewPurchaseHistroy(db)

    if err != nil {
        log.Fatal(err)
    }

	router := gin.Default()

	// Access Allowance
	setCors := func(r *gin.Engine) {
		r.Use(cors.New(cors.Config{
			AllowOrigins:     []string{"*"}, // or host.docker.internal, or 110wbs_dev
			AllowMethods:     []string{http.MethodPut, http.MethodPatch},
			AllowHeaders:     []string{"Content-Type"},
			ExposeHeaders:    []string{"Content-Length"},
			AllowCredentials: true,
			MaxAge:           12 * time.Hour,
		}))
	}

	setCors(router)

    router.GET("/accountMaster/someGet", accountMasterController.Get)
    router.POST("/accountMaster/somePost", accountMasterController.Post)
    router.PUT("/accountMaster/somePut", accountMasterController.Put)
    router.DELETE("/accountMaster/someDelete/:accountID", accountMasterController.Delete)

    router.GET("/accountAttribute/someGet", accountAttributeController.Get)
    router.POST("/accountAttribute/somePost", accountAttributeController.Post)
    router.PUT("/accountAttribute/somePut", accountAttributeController.Put)
    router.DELETE("/accountAttribute/someDelete/:accountID", accountAttributeController.Delete)

    router.GET("/offerList/someGet", offerListController.Get)
    router.POST("/offerList/somePost", offerListController.Post)
    router.PUT("/offerList/somePut", offerListController.Put)
    router.DELETE("/offerList/someDelete/:accountID", offerListController.Delete)

    router.GET("/purchaseHistroy/someGet", purchaseHistroyController.Get)
    router.POST("/purchaseHistroy/somePost", purchaseHistroyController.Post)
    router.PUT("/purchaseHistroy/somePut", purchaseHistroyController.Put)
    router.DELETE("/purchaseHistroy/someDelete/:accountID", purchaseHistroyController.Delete)

	router.Run()
}
