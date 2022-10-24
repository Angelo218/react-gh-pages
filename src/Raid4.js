import React from "react";
import "./raid4.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Raid4() {
  return (
    //   <div className="container">
    //   <div className="row">
    //     <div className="col-md-8">
    //       <div className="monster2">
    //         <div className="animate__animated animate__fadeInUpBig">
    //           <div className="inline">
    //             <img className="myimg2" src="./img/new1.gif" alt="" />
    //             <h3>周本BOSS烈焰鳳凰怎麼打</h3>
    //           </div>

    //           <div className="inline">
    //             <img className="myimg2" src="./img/new2.gif" alt="" />
    //             <h3>如何馴服阿爾巴龍</h3>
    //           </div>

    //             <div className="col-md-3">
    //               <div className="newbiebox">
    //                 <h3> Hello world</h3>
    //               </div>
    //               <div className="newbiebox">
    //                 <h3> Hello world</h3>
    //               </div>
    //               <div className="newbiebox">
    //                 <h3> Hello world</h3>
    //               </div>
    //               <div className="newbiebox">
    //                 <h3> Hello world</h3>
    //               </div>
    //               <div className="newbiebox">
    //                 <h3> Hello world</h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //  </div>
    <div className="animate__animated animate__fadeInUpBig">
      <div>
        <Container>
          <Row>
            <Col xs={4}>
              <div className="monster2">
                <img className="myimg2" src="./img/new1.gif" alt="" />
                <h3>周本BOSS烈焰鳳凰怎麼打</h3>
              </div>
            </Col>
            <Col xs={4}>
              <div className="monster2">
                <img className="myimg2" src="./img/new2.gif" alt="" />
                <h3>如何馴服阿爾巴龍</h3>
              </div>
            </Col>

            <Col xs={4}>
              <div className="monster2">
                <img className="myimg2" src="./img/new3.gif" alt="" />
                <h3>如何招攬狼族首領-無形入伍</h3>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>坐騎系統介紹</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>前期材料獲取方法</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>PC配置需求</h3>
            </div>
          </Col>
        </Container>

        <Container>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>消耗道具介紹</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>官網地址介紹</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>角色攻略</h3>
            </div>
          </Col>
        </Container>

        <Container>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>元素屬性簡介</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>強化材料獲得</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div className="newbiebox">
              <h3>新手副本指南</h3>
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
}
