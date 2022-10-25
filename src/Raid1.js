import "animate.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import React from "react";
import { Link } from "react-router-dom";
export default function Raid1() {
  let monsterlist = [
    {
      id: 1,
      name: "不死鳥",
      image: "monster1.jpg",
      description:
        "龐貝火山的守護神-不死鳥,人們稱之為鳳凰，原本是守護神的祂本與凡人後無瓜葛，但後來因為魔王奧古斯對其使用精神操控，令其變得殘暴和殺害平民，弱點：水系技能，特殊技能：火吸收（吸收一切火系技能和魔法）。",
    },
    {
      id: 2,
      name: "駿鷹",
      image: "monster2.jpg",
      description:
        "主要棲息在隆密高原的野獸，可通過通用技能馴養將其馴服，擁有尖銳的雙眼，因此很容易躲避玩家的攻擊，建議先致盲牠們的眼睛後才發起進攻。",
    },
    {
      id: 3,
      name: "哥布林",
      image: "monster3.jpg",
      description:
        "世界各地隨處可見的怪物，擁有各自的部落，不會單獨行動，建議新手玩家潛伏到其據點，逐一擊殺。弱點：火系技能。",
    },
    {
      id: 4,
      name: "獸人",
      image: "monster4.jpg",
      description:
        "棲息與各個森林的怪物，擁有碩大的體格和堅硬的皮膚，利用道具或者土系技能可將其致盲，更容易挑戰成功。",
    },
    {
      id: 5,
      name: "蜥蜴人",
      image: "monster5.jpg",
      description:
        "主要集中於迷失森林周邊的湖泊，在水中的戰鬥力十分強大且迅捷，十分懼怕陽光，在陸地上不過幾分鐘就會進入虛弱狀態，玩家可考慮將其引到陸上戰鬥。",
    },
    {
      id: 6,
      name: "石頭人",
      image: "monster6.jpg",
      description:
        "遍佈於各個山脈，擁有龐大的身軀和堅如磐石的皮膚，據說牠們是魔王奧古斯用魔法將自然的碎石拼湊而成的。",
    },
    {
      id: 7,
      name: "魔龍-恐懼的阿布斯",
      image: "monster7.jpg",
      description:
        "傳說中的怪物，在上世紀末突然出現，給法格特城帶來毀滅性的破壞，其後飛往通古斯山脈後，從此消失，建議玩家先提升各元素的抗性，並從世界樹習得屠龍的技能後向其挑戰。",
    },
    {
      id: 8,
      name: "尖爪飛龍",
      image: "monster8.jpg",
      description:
        "偶爾出現在平原的龍類怪物，主要集中在通古斯山脈，弱點是其胸腔突出的魔核。",
    },
    {
      id: 9,
      name: "炎龍優格爾",
      image: "monster9.jpg",
      description:
        "戰爭廢墟中的BOSS級怪物，與一般尖爪飛龍不同，會使用高級火系技能，對沒有任何火抗性的玩家極其危險，使用水系技能可有強效",
    },
    {
      id: 10,
      name: "半人惡魔",
      image: "monster10.jpg",
      description:
        "魔王奧古斯的最低級僕從，會暗黑魔法，與他們交鋒時盡量打斷他們的詠唱時間，施放不了技能的他們做不了任何東西",
    },
    {
      id: 11,
      name: "石像鬼",
      image: "monster11.jpg",
      description:
        "出沒在各個神廟的怪物，在玩家面前會扮演普通的石頭，乘其不意會從背後攻擊玩家，建議玩家在神廟留意石像的元素粒子",
    },
    {
      id: 12,
      name: "死神-驚悚的魔斯",
      image: "monster12.jpg",
      description:
        "魔王奧古斯的七大扈從之一，擁有奧古斯的死亡之力，玩家一般的攻擊並不會令其死亡，弱點是光明系魔法。",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="monster m-5">
        <div className='animate__animated animate__fadeInUpBig'>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                {" "}
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster1.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster2.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster3.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster4.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster5.jpg"} alt="不死鳥" />
              </Link>
            </div>

            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster6.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster7.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster8.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                {" "}
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster9.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster10.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster11.jpg"} alt="不死鳥" />
              </Link>
            </div>
            <div className="inline">
              <Link to={"/MonsterDetail/"}>
                <img id="myImg" src={process.env.PUBLIC_URL+"/img/monster12.jpg"} alt="不死鳥" />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
