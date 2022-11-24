import React from "react"
import Card from "../mlcs/Card";
import "./SiteTop.scss"
import ApiFetch from "../../hooks/ApiFetch";

const SiteTop = () => {
  const customerList = [
    {
      name: "どんな鍵にも対応できます！（鍵開け）",
      image: "../../../public/Assets/react2.svg",
      introduction:
        "３以内に解錠できなかったら返金いたします。"
    },
    {
      name: <ApiFetch />,
      image: "./golang.svg",
      introduction: "雑草に恐れられています。"
    },
    {
      name: "ゴミ屋敷は私にお任せ下さい！（ゴミ回収）",
      image: "../../../public/Assets/postgresql.svg",
      introduction:
        "ご依頼いただければ出動させます。"
    },
    {
      name: "ヤギ２匹派遣します！（草刈り）",
      image: "../../../public/Assets/postgresql.svg",
      introduction:
        "二馬力ならぬ二山羊力です。彼らが通った後にはぺんぺん草一つ生えません"
    }
  ];
  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="sitetop--inline">
          {customerList.map((productItem) => {
            return (
              <Card
                name={productItem.name}
                image={productItem.image}
                introduction={productItem.introduction}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SiteTop;