/*--+----+----+----+----+----+----+----+----+----+----+

      メインコンポーネント(Main.jsx)の実装
      2022.7.25 実装開始
      2022.8.2 クラスコンポーネントから関数コンポーネントに換装

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import Lesson from "./Lesson";
// import CommentForm from "./CommentForm";
import "./Main.scss";

const MainWrapper = () => {
  const customerList = [
    {
      name: "Sass",
      image: "./sass.svg",
      introduction: "触ってて一番楽しい言語です。とてもわかりやすい。"
    },
    {
      name: "React",
      image: "./react2.svg",
      introduction:
        "コンポーネント単位の開発は素晴らしい。jQueryを知らないので違いを体感できないのが残念。"
    },
    {
      name: "Go",
      image: "./golang.svg",
      introduction: "クローラの作成に成功しました。1週間かかりました。"
    },
    {
      name: "PostgreSQL",
      image: "./postgresql.svg",
      introduction:
        "使用予定。本当はサイバー攻撃対応のためSQL関連の技術スタックをサイトに記載するのはよくないのかも。"
    },
    {
      name: "PostgreSQL",
      image: "./postgresql.svg",
      introduction:
        "使用予定。本当はサイバー攻撃対応のためSQL関連の技術スタックをサイトに記載するのはよくないのかも。"
    },
    {
      name: "PostgreSQL",
      image: "./postgresql.svg",
      introduction:
        "使用予定。本当はサイバー攻撃対応のためSQL関連の技術スタックをサイトに記載するのはよくないのかも。"
    },
    {
      name: "PostgreSQL",
      image: "./postgresql.svg",
      introduction:
        "使用予定。本当はサイバー攻撃対応のためSQL関連の技術スタックをサイトに記載するのはよくないのかも。"
    },
    {
      name: "PostgreSQL",
      image: "./postgresql.svg",
      introduction:
        "使用予定。本当はサイバー攻撃対応のためSQL関連の技術スタックをサイトに記載するのはよくないのかも。"
    }
  ];

  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="copy-container">
          <h1>個人開発練習サイト</h1>
          <h2>
            React、Sass、Go、PostgressSQL、Dockerを組み合わせたWeb制作練習サイト
          </h2>
          <ul>
            <li>いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせす</li>
            <li>以呂波耳本へ止 千利奴流乎 和加餘多連曽 津祢那良牟 有為能於久耶万 計不己衣天 阿佐伎喩女美之 恵比毛勢須</li>
            <li>abcdefghijklmnopqrstuvwxyz</li>
            <li>1234567890</li>
          </ul>
        </div>

        <CommentForm />  {/*---DBへのテキスト送付用簡易ボタン*/}

        <div className="lesson-container">
          <h3>Mapメソッドの練習エリア（）</h3>
          {/*----------------------------------------------------*/}
          {customerList.map((lessonItem) => {
            return (
              <Lesson
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
              />
            );
          })}
        </div>
        <div className="contact-container">
          <h3>Histroy</h3>
          <ul>
            <li>
              <b>2022.8.2</b>{" "}
              コードをクラスコンポーネントから関数コンポーネントに変更（７０％完了）。
            </li>
            <li>
              <b>2022.7.31</b> モーダルを実装
            </li>
            <li>
              <b>2022.7.16</b> CSSをSASSに変更。
            </li>
            <li>
              <b>2022.7.10</b> 練習サイトの作成に着手。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainWrapper;
