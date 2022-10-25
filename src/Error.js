import React from "react";
import "./error.css";
export default function Error() {
  return (
    <div>
      <div>
        <img id="background" src={process.env.PUBLIC_URL+"/img/ui.png"} alt="Snow"></img>

        <div class="centered2">
          <h1>Error.404 Page</h1>
          <h1>哦?你好像迷路了？</h1>
          <div class="mo">
            <a
              href="http://localhost:3000/"
              class="btn effect04"
              data-sm-link-text="CLICK"
              target="_blank"
            >
              <span>回到主頁</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
