#--- Stage 1 --------------------------------------------------------------#
FROM postgres:14 AS build-stage
# ENV LANG ja_JP.utf8

# RUN /etc/init.d/postgresql start

WORKDIR /usr/src/dbstore
# RUN pg_dump -U postgres -Fc postgres > /usr/src/pg_dump.sql
CMD pg_dump -U postgres -Fc postgres > /usr/src/dbstore/pg_dump.sql
# RUN ["pg_dump" "-U" "postgres" "-Fc" "postgres" ">" "/usr/src/pg_dump.sql"]
# CMD ["pg_dump" "-U" "postgres" "-Fc" "postgres" ">" "/usr/src/pg_dump.sql"]
# CMD ["pg_dump" "-U" "postgres" "-Fc" "postgres" ">" "/usr/src/pg_dump.sql"]

# Stage1でDBの初期化（開発環境と同じ動作）を行い、生成されたDBをコンテナ内にてダンプさせる。
# DBなので、ここでやるのは「ビルドではなくダンプ」。

#--- Stage 2 --------------------------------------------------------------#
FROM postgres:14 AS production-stage
# ENV LANG ja_JP.utf8

COPY --from=build-stage /usr/src/dbstore/pg_dump.sql /usr/bin/pg_dump.sql
# WORKDIR /usr/src/dbstore
CMD pg_restore -c -Fc -d postgres -U postgres /usr/bin/pg_dump.sql
# RUN ["pg_restore" "-c" "-Fc" "-d" "postgres" "-U" "postgres" "/usr/src/dbstore/pg_dump.sql"]

# Stage1でダンプしたデータをStage2にコピーしリストアさせる。
# どこでダンプしたファイルの受け渡しをするかはFHSを考慮しつつ要検討。



# 「ビルド」と「ダンプ」という言葉の違いだけで、やってることはAPIサーバと同じ。
# なので、DBサーバでもマルチステージビルドはできるはず！

