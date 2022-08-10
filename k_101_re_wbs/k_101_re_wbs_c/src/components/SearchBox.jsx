/*--+----+----+----+----+----+----+----+----+----+----+

         検索窓コンポーネント
           2022.7.25 Tatsu_hira
     
           

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./SearchBox.scss";
import "./Management.scss";

const SearchBox = () => {
  return (
    <form className="form1" action="自分のサイトURL">
      <input
        className="sbox"
        id="s"
        name="s"
        type="text"
        placeholder="キーワードを入力"
      />
      <input className="sbtn" type="submit" value="検索" />
    </form>
  );
};

export default SearchBox;
