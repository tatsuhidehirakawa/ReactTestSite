package main

import (
	"context"
	"log"
	"net/http"

	"github.com/tatsuhidehirakawa/STGprd_devpkg/config"
	"github.com/tatsuhidehirakawa/STGprd_devpkg/infrastractue/persistence"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/tatsuhidehirakawa/STGprd_devpkg/graph"
	"github.com/tatsuhidehirakawa/STGprd_devpkg/io"
)

func main() {
	ctx := context.Background()
	cfg, err := config.LoadConfig(ctx)
	if err != nil {
		log.Fatal(err)
	}

	db, err := io.NewSQLdatabase(cfg)
	if err != nil {
		log.Fatal(err)
	}

	repository, err := persistence.NewRepositories(db)
	if err != nil {
		log.Fatal(err)
	}

	srv := handler.NewDefaultServer(
		graph.NewExecutableSchema(
			graph.Config{
				Resolvers: &graph.Resolver{
					Repo: repository,
				},
			},
		),
	)

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+cfg.Port, nil))
}
