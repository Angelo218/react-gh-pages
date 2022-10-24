import React from 'react'
import "./footer.css"
export default function footer() {
  return (
    <div>
    
      <footer className="footer">
        <div className="socialmedia">
          <img src="./img/aboutus/fb.png" alt="facebook" />
          <img src="./img/aboutus/ig.png" alt="instagram" />
          <img src="./img/aboutus/tw.png" alt="twitter" />
          <img src="./img/aboutus/yt.png" alt="youtube" />
        </div>
        <div className="policy">
          <a href="https://domodfg.github.io/world-s-bole/#/usepolicy">服務條款</a>
          <a href="https://domodfg.github.io/world-s-bole/#/privacy">私隱政策</a>
          <a href="https://domodfg.github.io/world-s-bole/#/cookiepolicy">數碼存根政策</a>
          <a href="https://domodfg.github.io/world-s-bole/#/contactus">聯絡我們</a>
        </div>
        <p>&copy; WB software Inc.</p>
      </footer>
      </div>
    );
  };
  