import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Carosel.css";

export default function carosel() {
  return (
    <div className="row">
      <div className="caroselborder">
        <Carousel fade className="caroselborder">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL+"/img/amanda.png"}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>全新角色</h3>
              <a href="https://domodfg.github.io/world-s-bole/#/shop/gacha">
                <h3>試試手氣吧</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL+"/img/Amelia.png"}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>全新角色</h3>
              <a href="https://domodfg.github.io/world-s-bole/#/shop/gacha">
                <h3>試試手氣吧</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL+"/img/event1.jpg"}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL+"/img/角色商店用.jpg"}
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
  );
}
