FROM node:14-alpine  
WORKDIR /usr/src/app_base
RUN npm install -g create-react-app
RUN create-react-app k_112wbs_re_dev_d --typescript
WORKDIR k_112wbs_re_dev_d
RUN npm install sass

# 後日、構築スクリプト削除のコマンド追加を忘れないこと！