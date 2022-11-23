import React from "react";
import Card from "./Card";
import "./Main.scss";

const List = () => {
  const customerList = [
    {
      name: "草刈正雄の父です！",
      image: "./sass.svg",
      introduction: "息子がお世話になっております。草刈り界の重鎮です。"
    },
    {
      name: "草刈り得意です！",
      image: "./react2.svg",
      introduction:
        "畳一枚一秒で草を刈ります。"
    },
    {
      name: "雑草界のジェノサイドカッターと呼ばれてます",
      image: "./golang.svg",
      introduction: "雑草に恐れられています。"
    },
    {
      name: "マイ草刈り機持ってます！",
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
      name: "ヤギ１匹派遣します！",
      image: "./postgresql.svg",
      introduction:
        "彼らが通った後にはぺんぺん草一つ生えません。"
    },
    {
      name: "ヤギ２匹派遣します！",
      image: "./postgresql.svg",
      introduction:
        "二馬力ならぬ二山羊力です。"
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
