import React from "react";
import "./dlccontent.css";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
export default function Dlcdontent() {
  return (
    <div className="dlccol-1" id="dlcsec1">
      <AnimationOnScroll animateIn="animate__slideInLeft">
        <div className="row featurette">
          {" "}
          <div className="col-md-5">
            <h2 className="glow">RTX. It’s On. </h2>
            <p className="text1">終極光線追蹤與人工智慧.</p>
            <p>
              光線追蹤與人工智慧技術正在革新我們玩遊戲和創作的方式，而 NVIDIA
              RTX 是支援這兩項技術最先進的平台。超過 150
              種熱門遊戲和應用程式使用 RTX
              展現快速到令人驚嘆的繪圖運算效能，或是提供 NVIDIA DLSS 和 NVIDIA
              Broadcast 等全新尖端人工智慧功能。RTX 立下新標竿。
            </p>
          </div>
          <div className="col-md-7">
            <div className="fade-in-image"></div>
          </div>{" "}
        </div>
      </AnimationOnScroll>
      <div className="dlccol-2" id="dlcsec2">
        <AnimationOnScroll animateIn="animate__slideInRight">
          <h2>
            玩家將會扮演魔神和光明之神優拉米斯，以祂們的視覺貫通整個故事，見證著祂們的愛恨情仇，怎麼由朋友化成敵人。
          </h2>
          <div className="row featurette">
            <div className="col-md-12">
              <div class="fade-in-image-2"></div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="dlccol-3" id="dlcsec3">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <div class="row">
            <div class="col-md-5 d-flex flex-column">
              <h2 className="featurette-heading">榮獲殊榮 </h2>
              <p>
                我們很榮幸我們的遊戲榮獲STEAM2022,TGA
                年度最佳遊戲，在此感謝玩家們的支持和團隊的奉獻。在未來的日子裡，我們定不辜負玩家們的期待，把遊戲的營運和優化都做到最好之如，更會回應廣大玩家的願望，帶給他們有趣的更新和遊戲體驗，在此預告一下，未來這款遊戲將會和某知名動漫聯名合作，屆時會帶來更多有趣的更新和玩法，敬請大家期待。
              </p>{" "}
              <div className="lastbtn">
                <Link to ="/"><button className="glow-on-hover">Return</button></Link>
              </div>
            </div>
            <div class="col-md-7">
              <div class="fade-in-image-3">
                <img src="./img/dlc/awrd.png" alt="" />
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
