/*--+----+----+----+----+----+----+----+----+----+----+

      DBへのテキストデータ送信用簡易コンポーネント
              2022.8.30 Tatsu_hira_s



----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./CommentForm.scss";
import "./Management.scss";

const CommentForm = () => {
//入力された値をチェック---<#1>


//入力された値を変数に格納---<#2>
const users = {

}
// 変数に格納された値をJSONへ変換---<#3>
let jsonData = JSON.stringify(users);


// jsonDataをAPIサーバへ送信---<#4>
//const response = await fetch("https://aaa.com/book?n=" + keyword);("2-①"、"3-③の処理")

return (
    <form className="commentForm">
      <input type="text" Placeholder="名前" />
      <input type="text" Placeholder="コメントを入力" />
      <input type="submit" value="送信" />
    </form>
  );
};

export default CommentForm;