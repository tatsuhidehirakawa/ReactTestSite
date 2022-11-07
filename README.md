## Personal Development Practice Repository (use STGPRD environment)
1. Overview  
It is a full-stack package for web development, focusing on the technology stack presented in the next chapter. It is optimized primarily as a template for creating large-scale CtoC sites. In particular, it is RESTful, does not use CSS-in-JS, minimizes Paas dependencies, emphasizes orthogonality and loose coupling, static typing, and Docker usage.  

2. Technology stacks.  
Frontend: TypeScript, React.js, Sass, Html, AtomicDesign, MindBEMding, MUI.  
Backend: Go(Gin,sqlc), PostgreSQL.  
Development environment: Docker, GNU Make, Air(Golang), VSCode, Git&Github, A5:SQL Mk-2, Windows10, macOS Monterey, Mermaid.js.  

3. Boot procedure.  
Please check the Makefile, that's all.  
(Git and Docker are required at a minimum, and use of GNU Make is recommended).  

5. STGprd Repository Diagram (overall)  
```
STGprd Repository Diagram

Sorce code                          +-----------+ 
(./STGprd_devpkg/s_01_src)          |/110wbs_src| React,Sass,TypeScript
                                    |  +-----------+  
                                    |  |/124api_src| Golang
                                    |  |  +-----------+                      
                                    |  |  |/134api_src| PostgreSQL
                                    +--|  |           |
                                       |  |Sorce codes|
                                       +--|           |
                                         ||           /
Development environment                  |+----+-----/
(./STGprd_devpkg/s_03_dev)               |  |  |
"make init.dev"   +----------------------|--|--|--------------------+
                  |      +-----------+   |  |  |                    |
                  |      |/110wbs_dev|   |  |  |                    |
                  |      | WebServer |   |  |  |                    |
                  |      |React,Sass +<--|--B  |                    |
                  |      |TypeScript |   |  |  |      +-----------+ |
                  | +----#3000       |   |  |  |      |/134dbs_dev| |
                  | |    +-----------+   |  |  |      |  DBServer | | 
  localhost:3000<---+    +-----------+   |  |  V<---->+ PostgreSQL| |
                  | |    |/124api_dev|   |  |  |      |           | |
                  | |    | APIServer |   |  |  |  +-->#5432       | |
                  | |    |  Golang   +<--B  |  |  |   +-----------+ |
                  | |    |           |   |  |  |  |                 |
                  | A--->#8080  #8080<------------S                 |
                  |      +-----------+   |  |  |                    |
                  +----------------------M--M--D--------------------+
                                         |  |  |  
Testing environment                 +----+--|--|+ 
(./STGprd_devpkg/s_03_tst)          |/110wbs|ts||
"make init.tst"                     |  +----+--|---+  
                                    |  |/120api|tst|
     A: Air(Hot reload)             |  |  +----+------+                      
     B: Bind Mount                  |  |  |/130dbs_tst|
     D: Dump and restore            +--|  | Container |
     M: Multi stage build              |  |    for    |
     S: sqlc(O/R Mapper)               +--|   test    |
     V: Initialize & Volume Mount         |           |
                                          +-----------+
                                             |
Staging environment                          |
(./STGprd_devpkg/s_04_stg)                Staging
"make init.stg"                         (Terraform)
```
6. Directory structure diagram (overall/excerpt)  
This directory structure is characterized by the separation of management files such as "Dockerfile" from the source code. The advantage of separating management files is that it is easy to switch architectures, for example, when you want to convert from "REST" to "GraphQL".  
```
STGprd_devpkg
  ├─s_01_src              # Source codes.
  |   ├─110wbs_src
  |   ├─124api_src
  |   └─134dbs_src
  ├─s_03_dev              # Management files for Development.(REST)
  |   ├─110wbs_dev
  |   |   ├─Dockerfile
  |   |   └─package.json  # Place the version control files used by the team here.
  |   ├─124api_dev
  |   |   ├─Dockerfile
  |   |   ├─go.mod        # Place the version control files used by the team here.
  |   |   └─go.sum        # (Same as above)
  |   ├─134dbs_dev
  |   ├─docker-compose.yml
  |   └─Makefile
  ├─s_05_tst              # Management files for Test.
  |   ├─110wbs_tst
  |   ├─124api_tst
  |   ├─134dbs_tst
  |   ├─docker-compose.yml
  |   └─Makefile
  ├─s_06_stg              # Management files for Stage.
  |   └─Makefile
  ├─Makefile              # Control files for Repository.
  └─README.md
```
4. Considerations  
(1)  
(2)  
<!--
使いやすさを優先せず、１０年後でも理解できるコードを！

-->
