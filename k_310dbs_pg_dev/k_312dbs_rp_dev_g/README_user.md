
Rails6 + PostgresのDocker開発環境

参考記事：https://qiita.com/d0ne1s/items/f724a08119bad2973e46

構築
```
docker-compose run web rails new . --force --no-deps --database=postgresql
docker-compose build
```
config/database.ymlを以下のとおり書き換える。
```
default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  host: db
  username: root
  password: password

development:
  <<: *default
  database: app_name_development

test:
  <<: *default
  database: app_name_test
```
ビルド後
```
docker-compose up
docker-compose exec web rails db:create
```
