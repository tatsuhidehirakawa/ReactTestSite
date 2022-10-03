## Personal Development Practice Repository (use STGPRD environment)
1. Overview  
RESTfulを意識  
CSS-in-JS非採用  
Paas依存の極小化  
直交性と疎結合、静的型付けとDocker利用を重視  

2. Technology stack  
Frontend: TypeScript、React.js、Sass、Html  
Backend: Go(Gin,sqlc)、PostgreSQL  
Development environment: Docker、VSCode、Git&Github、A5:SQL Mk-2、Windows10  

3. Boot procedure  
ディレクトリ「k_914set_dev」で「docker compose up」コマンドを実行すると必要なコンテナ全てが起動し、シェルによるAPIプログラム起動を経て待機状態となる（PCの性能にもよるがエンドポイントが利用可能になるまでトータルに2分36秒必要）  

4. Considerations  
(1)改行文字の制御に「.gitattributes」を使用  
(2)  

5. API definition  
☞[エンドポイント](/k_214api_dev/README.md)、[データ形式](/k_214api_dev/README.md)  
（リンク先参照）  

6. Server configuration diagram (overall)  
```
REST(ULCODC$SS)_Architecture
+--------------+  +---------------------------------------------------+
|              |  |          +-----------+    Development environment |
|              |  |          |   *114    |                            |
|              |  |          | WebServer |                            |
|              |  |          |React,Sass |                            |
|              |  |          |           |                            |
|              |  | +---#8080|#8080      |                            |
|              |  | |        +-----------+                            |
|              |  | |        +-----------+              +-----------+ |
|localhost:3000|<---+        |   *214    |              |   *314    | |
|              |  | |        | APIServer |              |  DBServer | |
|              |  | |        |  Golang   |              | PostgreSQL| |
|              |  | |        |(Gin/sqlc) |              |           | |
|              |  | +-->#3000|#8080 #8080|#3000<-->#5432|#5432      | |
|              |  |          +-----------+              +-----------+ |
|    CLIENT    |  +---------------------------------------------------+
|   (Browser)  |  |          +-----------+           Test environment |
|              |  |          |   *120    |                            |
|              |  |          | WebServer |          Ubuntu 22.04 LTS  |
|              |  |          |           |          Amazon Linux 2022 |
|              |  |          |           |                            |
|              |  | +---#8080|#8080      |                            |
|              |  | |        +-----------+                            |
|              |  | |        +-----------+              +-----------+ |
|           #80|<---+        |   *220    |              |   *320    | |
|              |  | |        | APIServer |              |  DBServer | |
|              |  | |        |  Golang   |              | PostgreSQL| |
|              |  | |        |           |              |           | |
|              |  | +-->#3000|#8080 #8080|#3000<-->#5432|#5432      | |
|              |  |          +-----------+              +-----------+ |
+--------------+  +---------------------------------------------------+
```
7. Directory structure diagram (overall/excerpt)  
```
myportfolio_k
  ├─k_114wbs_dev        # No.114:WebServer(for development)
  ├─k_120wbs_tst
  ├─k_214api_dev        # No.214:APIServer(for development)
  ├─k_220api_tst
  ├─k_314dbs_dev        # No.314:DBServer(for development)
  ├─k_320dbs_tst
  ├─k_914set_dev        # Management files(for development)
  ├─k_920set_tst
  ├─docker-bake.hcl
  ├─Makefile
  └─README.md
```
<!-- -->
