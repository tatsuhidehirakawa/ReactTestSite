## PosrgreSQL+Dockerを利用したWebサーバの構築

参考資料：https://zenn.dev/re24_1986/articles/b76c3fd8f76aec

１　DB構成
```
STGprd_devpkg
  ├─k_314dbs_src
  │  ├─config
  │  │  └─postgresql.conf
  │  └─initdb
  │     ├─01_initialize.sql
  │     ├─02_create_table.sql
  │     └─03_initdata.sql
  └─k_914set_dev
     └─314set_dev
       └─Dockerfile
```