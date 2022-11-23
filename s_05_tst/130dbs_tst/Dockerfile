#--- Stage 1 --------------------------------------------------------------#
FROM postgres:14 AS build-stage
ENV LANG ja_JP.utf8

# RUN pg_dump -U postgres -Fc postgres > /usr/src/dbstore/130dbs_tst.sql
WORKDIR /usr/src/dbstore
RUN ["pg_dump" "-U" "postgres" "-Fc" "postgres" ">" "/usr/src/dbstore/130dbs_tst.sql"]

# Stage1でDBの初期化（開発環境と同じ動作）を行い、生成されたDBをコンテナ内にてダンプさせる。
# DBなので、ここでやるのは「ビルドではなくダンプ」。

#--- Stage 2 --------------------------------------------------------------#
FROM postgres:14-alpine AS production-stage
ENV LANG ja_JP.utf8

COPY --from=build-stage /usr/src/dbstore/130dbs_tst.sql /usr/src/dbstore/130dbs_tst.sql
WORKDIR /usr/src/dbstore
# RUN pg_restore -c -Fc -d postgres -U postgres /usr/src/dbstore/130dbs_tst.sql
RUN ["pg_restore" "-c" "-Fc" "-d" "postgres" "-U" "postgres" "/usr/src/dbstore/130dbs_tst.sql"]

# Stage1でダンプしたデータをStage2にコピーしリストアさせる。
# どこでダンプしたファイルの受け渡しをするかはFHSを考慮しつつ要検討。



# 「ビルド」と「ダンプ」という言葉の違いだけで、やってることはAPIサーバと同じ。
# なので、DBサーバでもマルチステージビルドはできるはず！

