Container for API server "k_214api_dev"  

1. API Definition  
(1) Endpoint  
localhost:3000/someGet,somePost,somePut,someDelete  
(2)Data Formats  
Under construction
2. Directory structure diagram (Local/excerpt)  
```
myportfolio_k
  ├─k_114wbs_dev
  ├─k_214api_dev                   # APIServer(No.214)
  │  └─src -----------------------># Bind mounted area.
  │    ├─main.go
  │    ├─config.go
  │    └─sqlc                      # ORM(sqlc)
  │       ├─query.sql
  │       ├─schema.sql
  │       └─sqlc.yaml
  ├─k_314dbs_dev
  ├─k_914set_dev
  │  ├─214set_dev
  │  │  ├─Dockerfile
  │  │  └─pkgset.sh --------------># Place to put shell scripts.
  │  └─docker-compose.yml
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