import "./Monsterlist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer.js";
import Raid1 from "./Raid1.js";
import Nabar from "./Nabar.js";
import Carosel from "./carosel";
import Raid2 from "./Raid2";
import Raid3 from "./Raid3";
import Raid4 from "./Raid4";
import { useState } from "react";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Monsterlist() {
  const [active, SetActive] = useState("Firstcol");
  return (
    <div>
      <div className="Monsterbackground">
        <div className="animate__animated animate__fadeInUpBig">
          <Nabar />
        </div>

        <div className="m-5">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <img id="gamelogo2" src="./img/game.jpg" alt="" />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="pvsection">
          <img src="./img/download.png" alt=" "></img>
          <h3>遊戲最新PV </h3>
          <img id="transformx" src="./img/download1.png" alt=" "></img>
        </div>
        <div id="PVsect">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g3ydUeC1mm4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </AnimationOnScroll>

        <div className="container m-3">
          <div className="row">
            <div className="col-3">
              <div className="photowrapper">
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <img id="gamelogo" src="./img/wb2.jpg" alt="img" />
                </AnimationOnScroll>
              </div>

              <AnimationOnScroll animateIn="animate__slideInLeft">
                <button class="fill" onClick={() => SetActive("Firstcol")}>
                  怪物圖鑒
                </button>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__slideInRight">
                <button class="fill" onClick={() => SetActive("Secondcol")}>
                  武器圖鑒
                </button>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__slideInLeft">
                <button class="fill" onClick={() => SetActive("Thirdcol")}>
                  材料圖鑒
                </button>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__slideInRight">
                <button class="fill" onClick={() => SetActive("Forthcol")}>
                  新手攻略
                </button>
              </AnimationOnScroll>
            </div>

            <div className="col-9">
              <div className="row">
                <AnimationOnScroll animateIn="animate__slideInUp">
                  <Carosel />
                </AnimationOnScroll>
                <hr />

                {active === "Firstcol" && <Raid1 />}
                {active === "Secondcol" && <Raid2 />}
                {active === "Thirdcol" && <Raid3 />}
                {active === "Forthcol" && <Raid4 />}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
