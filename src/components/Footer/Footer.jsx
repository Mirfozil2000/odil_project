import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>miliy taomlar</h5>
        <p>eng mazali taomlar</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">ish vaqti</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>dushanbadan yakshanbagacha</span>
            <p>08:00 - 23:00</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
                      </div>
        </ListGroup>
     
      </div>
    </footer>

);
};

export default Footer;
