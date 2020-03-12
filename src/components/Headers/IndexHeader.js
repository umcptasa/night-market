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
import { Button, Container, Row, Col } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/jiufen-teahouse-night.jpg") + ")"
        }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" sm="12">
                <h1 className="presentation-title">UMCP 2020 Night Market</h1>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" sm="12">
                <h2 className="presentation-subtitle">
                  The foundation of the empire.
                </h2>
              </Col>
            </Row>
            <br />
            <Row>         
              <Col className="ml-auto mr-auto" sm="6">
                <Button
                  color="info"
                  size="lg"
                  href="https://www.facebook.com/umcptasa/"
                  block
                >
                  Saturday, April 11, 2020 | 6 PM @ Hornbake Plaza
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
