import React from "react";
import cclogo from "../../images/cclogoTwo.png";
import "../../components/Header/header.css";

function Header() {
  return (
    <div className="headers">
      <div className="leftHeader">
        <img src={cclogo} alt="" className="logo" />
        <h2>Coucil Speaks</h2>
      </div>
      <nav>
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
        <i class="ri-menu-line menuicon"></i>
      </nav>
    </div>
  );
}

export default Header;
