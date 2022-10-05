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
Please check the Makefile, that's all.

4. Considerations  
(1)改行文字の制御に「.gitattributes」を使用  
(2)  

5. Server configuration diagram (overall)  
```
REST(ULCODC$SS)_Architecture
+--------------+  +---------------------------------------------------+
|              |  |          +-----------+    Development environment |
|              |  |          | *110_dev  |                            |
|              |  |          | WebServer |                            |
|              |  |          |React,Sass |                            |
|              |  |          |           |                            |
|              |  | +---#8080|#8080      |                            |
|              |  | |        +-----------+                            |
|              |  | |        +-----------+              +-----------+ |
|localhost:3000|<---+        | *124_dev  |              | *134_dev  | |
|              |  | |        | APIServer |              |  DBServer | |
|              |  | |        |  Golang   |              | PostgreSQL| |
|              |  | |        |(Gin/sqlc) |              |           | |
|              |  | +-->#3000|#8080 #8080|#3000<-->#5432|#5432      | |
|              |  |          +-----------+              +-----------+ |
|    CLIENT    |  +---------------------------------------------------+
|   (Browser)  |  |          +-----------+           Test environment |
|              |  |          | *110_tst  |                            |
|              |  |          | WebServer |          Ubuntu 22.04 LTS  |
|              |  |          |           |          Amazon Linux 2022 |
|              |  |          |           |                            |
|              |  | +---#8080|#8080      |                            |
|              |  | |        +-----------+                            |
|              |  | |        +-----------+              +-----------+ |
|           #80|<---+        | *120_tst  |              | *130_tst  | |
|              |  | |        | APIServer |              |  DBServer | |
|              |  | |        |  Golang   |              | PostgreSQL| |
|              |  | |        |           |              |           | |
|              |  | +-->#3000|#8080 #8080|#3000<-->#5432|#5432      | |
|              |  |          +-----------+              +-----------+ |
+--------------+  +---------------------------------------------------+
```
6. Directory structure diagram (overall/excerpt)  
```
myportfolio_k
  ├─k_01_src
  |  ├─110wbs_src       # Source code of WebServer.
  |  ├─124api_src       # Source code of APIServer.
  |  ├─134dbs_src       # Source code of DBServer.
  |  └─170log_src
  ├─k_02_dev            # Management files for development.
  ├─k_03_tst            # Management files for test.
  ├─Makefile
  └─README.md
```
<!--
-->
