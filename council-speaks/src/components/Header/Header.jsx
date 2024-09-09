import React, { useState } from "react";
import cclogo from "../../images/cclogoTwo.png";
import "../../components/Header/header.css";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  function menuHanlder() {
    setMenuToggle(true);
  }
  return (
    <>
      <div className="headers">
        <div className="leftHeader">
          <img src={cclogo} alt="" className="logo" />
          <h2>Coucil Speaks</h2>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <button className="btn-grad">Login / Sign up</button>
          </ul>
          <div
            onClick={menuHanlder}
            className={menuToggle ? "hideMenu" : "menuicon"}
          >
            <i class="ri-menu-line "></i>
          </div>
        </nav>
      </div>
      {/* absolute nav bar code */}
      <nav className={menuToggle ? "absolute-nav" : "absolute-nav-hidden"}>
        <div className="close-icon-div" onClick={() => setMenuToggle(false)}>
          <i
            class="ri-close-line closeIcon"
            onClick={() => console.log("close")}
          ></i>
        </div>
        <ul>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <button className="btn-grad">Login / Sign up</button>
        </ul>
      </nav>
    </>
  );
}

export default Header;
