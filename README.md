## Personal Development Practice Repository
1. Overview  
一般的なCtoCサイトのひな形を作成  
RESTfulを意識  
CSS-in-JS非採用  
Paas依存の極小化  
直交性と疎結合、静的型付けとDocker利用を重視  

2. Technology stack  
Frontend: TypeScript、React.js、Sass、Html  
Backend: Go(Gin,sqlc)、PostgreSQL  
Development environment: Docker、VSCode、Git&Github、A5:SQL Mk-2、Windows10  

3. Boot procedure  
ディレクトリ「k_904set_dev」で「docker compose up」コマンドを実行すると必要なコンテナ全てが起動し、シェルによるAPIプログラム起動を経て待機状態となる（PCの性能にもよるがエンドポイントが利用可能になるまでトータルに2分36秒必要）  

4. Considerations  
(1)改行文字の制御に「.gitattributes」を使用  
(2)  

5. API definition  
☞[エンドポイント](/k_214api_dev/README.md)、[データ形式](/k_214api_dev/README.md)  
（リンク先参照）  

6. Server configuration diagram (overall)  
```
REST(ULCODC$SS)_Architecture
+-----------+  +------------------------------------------------+
|           |  |           +-----------+ act: Ubuntu 22.04 LTS  |
|           |  |           |   *114    |      Amazon Linux 2022 |
|           |  |           | WebServer |                        |
|           |  |           |React,Sass |                        |
|           |  |    HTML   |           |                        |
|           |  | +-CSS,JS--|#8080      |                        |
|  CLIENT   |  | |         +-----------+                        |
| (Browser) |  | |         +-----------+          +-----------+ |
|        #80|<---+         |   *214    |          |   *314    | |
|           |  | |         | APIServer |          |  DBServer | |
|           |  | |         |  Golang   |          | PostgreSQL| |
|           |  | |         |(Gin/sqlc) |          |           | |
|           |  | +--JSON-->|#443  #5432|<---SQL-->|#5432      | |
|           |  |           +-----------+          +-----------+ |
+-----------+  +------------------------------------------------+
```
7. Directory structure diagram (overall/excerpt)  
```
myportfolio_k
  ├─k_114wbs_dev                   # 114番WebServer(開発用)
  ├─k_214api_dev                   # 214番APIServer(開発用)
  ├─k_314dbs_dev                   # 314番DBServer(開発用)
  └─k_914set_dev                   # 管理系ファイル群(開発用)
     └─docker-compose.yml          # 起動用ymlファイル(開発用)
```
