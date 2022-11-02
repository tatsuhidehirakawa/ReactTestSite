## Personal Development Practice Repository (use STGPRD environment)
1. Overview  
It is a full-stack package for web development, focusing on the technology stack presented in the next chapter. It is optimized primarily as a template for creating large-scale CtoC sites. In particular, it is RESTful, does not use CSS-in-JS, minimizes Paas dependencies, emphasizes orthogonality and loose coupling, static typing, and Docker usage.  

2. Technology stack  
Frontend: TypeScript, React.js, Sass, Html, AtomicDesign.  
Backend: Go(Gin,sqlc), PostgreSQL.  
Development environment: Docker, GNU Make, Air(Golang), VSCode, Git&Github, A5:SQL Mk-2, Windows10, macOS Monterey, Mermaid.js.  

3. Boot procedure  
Please check the Makefile, that's all.  

4. (Warning) Handling of Version Control Files
This package does not include the version control files "package.json", "go.mod", and "go.sum". If you use this package, please prepare these files by yourself. Refer to "Makefile" for information on how to apply the version control files.  

5. Branch names  
master -> Existing version.  
hotfix-100622 -> API server sorce code development.  
<!-- develop -> Next Version.  -->
<!-- release-*  -->
<!-- hotfix-100622 -->

6. Considerations  
(1)改行文字の制御に「.gitattributes」を使用  
(2)  

7. Server configuration diagram (overall)  
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
8. Directory structure diagram (overall/excerpt)  
```
myportfolio_k
  ├─k_01_src            # Source codes.
  ├─k_02_dev            # Management files for Development.
  ├─k_03_tst            # Management files for Test.
  ├─k_04_stg            # Management files for Stage.
  ├─Makefile
  └─README.md
```

9. Task list  
- [x] [#2785](k_01_src/124api_src/src/main.go) : Add "post" method on "main.go".  
- [ ] [#7236](k_01_src/124api_src/src/main.go) : Add "delete" method on "main.go".  
- [ ] [#9832](k_01_src/124api_src/src/main.go) : Add "put" method on "main.go".  
- [ ] [#5982](k_01_src/124api_src/src/main.go) : Add "Environment variable" on "main.go".  
- [ ] [#8246](k_01_src/124api_src/src/main.go) : Add "Authentication mechanism" on "API".  
- [ ] [#3256](k_03_tst/120api_tst/Dockerfile) : Add test environment on "k_03_tst".(Use multistage build.)  

<!--
使いやすさを優先せず、１０年後でも理解できるコードを！

-->
