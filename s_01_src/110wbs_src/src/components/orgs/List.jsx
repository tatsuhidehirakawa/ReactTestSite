import React from "react";
import Card from "./Card";
import "./Main.scss";

const List = () => {
  const customerList = [
    {
      name: "壁紙の張り替え得意です！（現状回復）",
      image: "./sass.svg",
      introduction: "息子がお世話になっております。草刈り界の重鎮です。"
    },
    {
      name: "どんな鍵にも対応できます！（鍵開け）",
      image: "./react2.svg",
      introduction:
        "３以内に解錠できなかったら返金いたします。"
    },
    {
      name: "マイ草刈り機持ってます！（草刈り）",
      image: "./golang.svg",
      introduction: "雑草に恐れられています。"
    },
    {
      name: "ゴミ屋敷は私にお任せ下さい！（ゴミ回収）",
      image: "./postgresql.svg",
      introduction:
        "ご依頼いただければ出動させます。"
    },
    {
      name: "あなたのお庭、奇麗にします！",
      image: "./postgresql.svg",
      introduction:
        "前職はキャディです。"
    },
    {
      name: "指先から葉緑素を吸収します",
      image: "./postgresql.svg",
      introduction:
        "のび太です。"
    },
    {
      name: "清掃はお任せください！（敷地内清掃）",
      image: "./postgresql.svg",
      introduction:
        "彼らが通った後にはぺんぺん草一つ生えません。"
    },
    {
      name: "ヤギ２匹派遣します！（草刈り）",
      image: "./postgresql.svg",
      introduction:
        "二馬力ならぬ二山羊力です。彼らが通った後にはぺんぺん草一つ生えません"
    }
  ];

  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="lesson-container">
          {customerList.map((lessonItem) => {
            return (
              <Card
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
