import React from "react";
import Navbar from "./Nabar.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./footer.js";
import Carousel from "react-bootstrap/Carousel";
import "./contactus.css";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function contactus() {
  return (
    <div id="contactpage">
      <div className="animate__animated animate__bounce">
        <Navbar />{" "}
      </div>
      <div>
        <div className="animate__animated animate__heartBeat">
          <div className="aboutuspromo">
            <h1>About Us</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
             
                <div className="caroselborder">
                  <Carousel fade className="caroselborder">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="./img/amanda.png"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        
                      </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="./img/prmo.jpg"
                        alt="Second slide"
                      />
          
                      <Carousel.Caption>
                       
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="./img/merchants.jpg"
                        alt="Third slide"
                      />
          
                      <Carousel.Caption></Carousel.Caption>
          
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="./img/角色商店用.jpg"
                          alt="forth slide"
                        />
          
                        <Carousel.Caption>
                          <h3>開放度極高的世界</h3>
                          <p>讓你隨心所想地探索世界</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            

                <div className="col-md-6">
                  <div>
                    <img src="./img/jitter1.gif" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__fadeIn">
        <div id="promotebanner" >
         <a id="banner" href="https://domodfg.github.io/world-s-bole/#/shop/merch"><img src="./img/promotebanner.png" alt=""/></a>
        </div>
        </div>
        <AnimationOnScroll animateIn="bounce">
          <hr class="accessory" />
        </AnimationOnScroll>
        <div className="animate__animated animatebounce ">
          <div class="content">
            <div className="contactusintro">
              <img src="./img/aboutus/bg2.jpg" alt="" />
              
              <div class="top-left">Our Mission </div>

              <div class="centered">
                讓全世界都熱愛遊戲
                <p>Let The World Love Games</p>
              </div>
            </div>
          </div>
        </div>
        <AnimationOnScroll animateIn="fadeIn">
          {" "}
          <hr class="bookends"></hr>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="bounce">
          <div id="us">
            <section id="sec1">
              <h2>About WB Inc.</h2>
              <p>
                WB
                Inc（全稱世界樹科技股份有限公司）簡稱WB,是一家成立於2018年6月13日，總部位於
                韓國釜山的電子遊戲公司。
              </p>
              <p>
                WB以執作MMORPG《World's
                Bole》而聞名，在其發佈後，在2021年榮獲TBA最佳遊戲敘事，
                還有在2027年榮獲香港遊戲大獎的優秀獎。除了獲得傑出的獎項外，這款遊戲至今仍是史上營收最高的
                MMORPG電子遊戲之一。
              </p>
              <p>
                2022年起,WB品牌已在上海總部以外的本部發行。濟南、台北、香港、美國洛杉磯、首爾台灣、日本等地、韓國建立工作室、當前企業，共同員工20000餘人。
                他們都是來自世界各地的優秀人才。
              </p>
              <p>
                截至2022年，WB董事局主席、總經理DOMO握有該集團41%的股份。
                而總裁、首席執行官Chris、副總裁Eward作為該集團第二和第三大股東分別持有22.6%、21.4%的股份。其餘15%股份則由TOMMY&KELVIN有限公司持有
              </p>
            </section>{" "}
          </div>{" "}
        </AnimationOnScroll>
      </div>

      <Footer />
    </div>
  );
}
