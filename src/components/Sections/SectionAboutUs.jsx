/**
 * About Us
 */

import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

const SectionAboutUs = (props) => {

    return (
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8" sm="12">
                <h2 className="title">What is a Night Market?</h2>
                <h5 className="description">
                  An amazing Night Market description that lasts for man pagraphs. 
                  It is so amazing that wow I can't even type it all out. So cool. 
                  Such grace. Truly tremendous.
                </h5>
                <br />
                <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                </div>
              </Col>
              <Col md="4" sm = "12">
                <h2 className="title">A big image goes here</h2>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
              <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        
    );
};

export default SectionAboutUs;