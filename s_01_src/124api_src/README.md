Container for API server.  

1. API Definition  
(1) Endpoint  
localhost:8080/someGet  
localhost:8080/somePost  
localhost:8080/somePut  
localhost:8080/someDelete/:accountID  
(2)Data Formats  
Under construction
2. Directory structure diagram (Local/excerpt)  
```
STGprd_devpkg
  ├─s_01_src
  │  ├─110wbs_src
  │  ├─124api_src                     # APIServer(No.214)
  │  │  └─src -----------------------># Bind mounted area.
  │  │    ├─main.go
  │  │    ├─config
  │  │    ├─controllers
  │  │    ├─models
  │  │    └─sqlc                      # ORM(sqlc)
  │  │       ├─query.sql
  │  │       ├─schema.sql
  │  │       └─sqlc.yaml
  │  └─134dbs_src
  ├─s_03_dev
  │  ├─110wbs_dev
  │  ├─124api_dev
  │  │  ├─Dockerfile
  │  │  ├─go.mod
  │  │  ├─go.sum
  │  │  └─pkgset.sh --------------># Place to put shell scripts.
  │  ├─134dbs_dev
  │  ├─docker-compose.yml
  │  └─Makefile
  ├─s_05_tst
  │  ├─110wbs_tst
  │  ├─120api_tst
  │  │  └─Dockerfile--------------># For Multi stage build.
  │  ├─130dbs_tst
  │  ├─docker-compose.yml
  │  └─Makefile
  ├─s_06_stg
  └─Makefile                       # For boot
```
3. Directory structure diagram (Inside the Docker Container/excerpt)  
```
root@89ff808980e1:
 ├─go
 |  └─src ------------------------># Bind mounted area.
 └─usr
    └─local
       └─bin ---------------------># Place to put shell scripts.
          └─pkgset.sh
```
<!--

-->
