/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Row, Container } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav links">
            <ul>
              <li>
                <a
                  href="https://umcptasa.org"
                  target="_blank"
                >
                  <img className="footer-icon" alt="TASA logo" src={require("assets/img/tasa_logo_black.png")} /> UMCP TASA
                </a>
              </li>
              <li>
                <Button className="btn-link ml-auto mr-auto" href="https://www.facebook.com/umcptasa/" target="_blank">
                  <FontAwesomeIcon className="footer-icon icon-primary" icon={faFacebook} />
                </Button>

              </li>
              <li>
                <Button className="btn-link  ml-auto mr-auto" href="https://www.instagram.com/umcptasa/" target="_blank">
                  <FontAwesomeIcon className="footer-icon icon-primary" icon={faInstagram} />
                </Button>
              </li>
              <li>
                <Button className="btn-link  ml-auto mr-auto" href="https://www.youtube.com/channel/UC40-b0_FuCsHA1lM0vCZsng/featured" target="_blank">
                  <FontAwesomeIcon className="footer-icon icon-primary" icon={faYoutube} />
                </Button>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <FontAwesomeIcon className="fa fa-heart heart" icon={faHeart} /> by UMCP TASA
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
