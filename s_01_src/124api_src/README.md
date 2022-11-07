Container for API server "k_214api_dev"  

1. API Definition  
(1) Endpoint  
localhost:3000/someGet,somePost,somePut,someDelete  
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
  │  │    ├─config.go
  │  │    └─sqlc                      # ORM(sqlc)
  │  │       ├─query.sql
  │  │       ├─schema.sql
  │  │       └─sqlc.yaml
  │  └─134dbs_src
  ├─s_03_dev
  │  ├─110wbs_dev
  │  ├─124api_dev
  │  │  ├─Dockerfile
  │  │  └─pkgset.sh --------------># Place to put shell scripts.
  │  ├─134dbs_dev
  │  └─docker-compose.yml
  ├─k_03_tst
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
          └─npmset.sh
```
<!--

-->