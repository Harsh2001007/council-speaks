import React from "react";
import "../Footer/footer.css";
import footerLogo from "../../images/cclogoTwo.png";

function Footer() {
  return (
    <>
      <div className="footer-main-container">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-container">
              <div className="img-footer-container">
                <img src={footerLogo} alt="cc logo" className="footer-logo" />
              </div>
              <h2>Council Speaks</h2>
            </div>
            <div className="footer-contact-details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                accusantium necessitatibus eveniet fugit vitae possimus nobis
                error, earum beatae voluptates amet doloremque iusto consequatur
                architecto tempora molestias ut? Officia, reiciendis.
              </p>
            </div>
            <div className="contact-footer-btn">
              <button>Chat our experts</button>
            </div>
          </div>
          <div className="footer-right"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
