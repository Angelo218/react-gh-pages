import React from "react";
import "./dlc.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Nabar from "./Nabar";
import "./Carosel.css";
import Dlcdontent from "./Dlcdontent";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "./footer.js";
import { HashLink } from "react-router-hash-link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
function Dlc() {
  return (
    <div className="dlccotainer">
      <div className="container-fluid">
        <div className="animate__animated animate__bounce">
          <Nabar />
        </div>
        <div className="row">
          <div className="animate__animated animate__fadeIn animate__slower	3s">
            {" "}
            <div className="dlccarosel">
              <Carousel fade>
                <Carousel.Item>
                  <div>
                    <img
                      className="d-block w-100"
                      src="/img/dlc/iStock.jpg"
                      alt="First slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <h2> World Boles</h2>
                    <h3>與靈馬在火焰森林中策馬奔騰</h3>

                    <button class="glow-on-hover" type="button">
                      Download Now
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <div>
                    <img
                      className="d-block w-100"
                      src="/img/dlc/iStock-1.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <h2> World Boles</h2>
                    <h3>守護阿羅巴部落的人</h3>

                    <p> 與巨人族進行一場浴血奮戰吧</p>
                    <button class="glow-on-hover" type="button">
                      Download Now
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div>
                    <img
                      className="d-block w-100"
                      src="/img/dlc/iStock-2.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <Carousel.Caption>
                    <h2> World Boles</h2>
                    <h3>全新周本BOSS</h3>

                    <p> 魔王的心腹-凱尼王三世</p>
                    <button class="glow-on-hover" type="button">
                      Download Now
                    </button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="container">
            <div className="overflow">
              <div className="row">
                <div className="col-lg-4 center">
                  <img
                    className="rounded-circle"
                    src="/img/dlc/icon.jpg"
                    alt=" "
                  ></img>
                  <div className="dlch2">
                    <h2>劇情設計師</h2>
                  </div>
                  <p>
                    這次的前傳中，劇情主要環繞著魔神和優拉米斯的前傳故事，令到遊戲的正傳的內容更全面和完整。玩家將會扮演魔神和光明之神優拉米斯，以祂們的視覺貫通整個故事，見證著祂們的愛恨情仇，怎麼由朋友化成敵人。-Edward
                  </p>
                  <p>
                    {" "}
                    <a href="#section2">
                      <div className="col2button"> </div>
                    </a>
                  </p>
                </div>
                <div className="col-lg-4">
                  <img
                    className="rounded-circle"
                    src=" /img/dlc/icon1.jpg"
                    alt=" "
                  ></img>
                  <div className="dlch2">
                    <h2>圖像設計師</h2>
                  </div>
                  <p>
                    在即將來臨的前傳中，我們將會改善遊戲引擎，令到遊戲的優化做得更好，就算是一般電腦配置的玩家也能順玩前傳。除此之外，我們團隊引入了NVIDIA的光線追蹤技術和DLSS技術，令到遊戲做到實時光影追蹤，從而看起來更加真實，遊戲體驗更佳。
                    -TOMMY
                  </p>
                </div>
                <div className="col-lg-4">
                  <img
                    className="rounded-circle"
                    src=" /img/dlc/icon2.jpg"
                    alt=" "
                  ></img>
                  <div className="dlch2">
                    <h2>遊戲製作人</h2>
                  </div>
                  <p>
                    首先我們很榮幸我們的遊戲榮獲STEAM2022,TGA
                    年度最佳遊戲，在此感謝玩家們的支持和團隊的奉獻。在之後的前傳中，我們的團隊將會在打鬥系統花多些功夫和增加難度，令遊戲更具挑戰性，例如在增加讀條系統，玩家將需要在特定的時間按指定的鍵，以進行攻擊或者防禦，詳情請留意我們最新PV。此外在前傳中，我們將會提高多人遊戲的可玩性，如一些主線需玩家互相合作才能通關。-DOMO
                  </p>
                
                </div>

                <Container>
                  <Row>
                    <Col xs={4}>
                      <div className="col2button">
                        <HashLink smooth to="/Dlc#dlcsec2">
                          {" "}
                          <button className="glow-on-hover" type="button">
                            Details
                          </button>
                        </HashLink>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div>
                        <a href="https://www.nvidia.com/en-us/geforce/rtx/">
                          <div className="col2button">
                            <button className="glow-on-hover" type="button">
                              Details
                            </button>
                          </div>
                        </a>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="col2button">
                        <HashLink smooth to="/Dlc#dlcsec3">
                          {" "}
                          <button className="glow-on-hover" type="button">
                            Details
                          </button>
                        </HashLink>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

        <div>
          <Dlcdontent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dlc;
 