 
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React from 'react'

export default function Nabar() {
  return (
    
 
      <div>
        <section className="top-nav">
        <div>
          <button type="button" className="Tbn">
            <Link to ="/">
              World's Bole{" "}
           </Link>
              
          </button>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" for="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <button type="button" className="button2">
              <a href="https://domodfg.github.io/world-s-bole/#/"><img className="diamond" src={process.env.PUBLIC_URL+"/img/diamond.png"}></img>遊戲官網</a>
            </button>
          </li>
          <li>
            <button className="button2">
            <img img className="diamond" src={process.env.PUBLIC_URL+"/img/diamond.png"}></img><Link to="/contactus">關於我們</Link>
            </button>
          </li>

          <li>
            <button className="button2">
             <a href="https://domodfg.github.io/world-s-bole/#/contactus"><img img className="diamond" src={process.env.PUBLIC_URL+"/img/diamond.png"}></img> 聯絡我們 </a>
            </button>
          </li>
          <li>
            <button className="button2">
              <a href="https://domodfg.github.io/world-s-bole/#/shop/merch">
              <img img className="diamond" src={process.env.PUBLIC_URL+"/img/diamond.png"}></img> 購買周邊
              </a>
            </button>
          </li>
          <li>
            <button className="button2">
              <Link to="/Dlc"><img img className="diamond" src={process.env.PUBLIC_URL+"/img/diamond.png"}></img> 遊戲前傳 </Link>
            </button>
          </li>
        </ul>
      </section>
      </div>
      
    )
  
}

    
      
 