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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const SectionAboutUs = (props) => {

  return (
    <div className="section section-dark text-center">
      <div className="lantern-banner">
        <img alt="lantern banner" src={require("assets/img/lantern-banner.png")} />
      </div>
      <div className="lantern-banner right">
        <img alt="lantern banner" src={require("assets/img/lantern-banner.png")} />
      </div>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8" sm="12">
            <h2 className="title">What is a Night Market?</h2>
            <h5 className="description">
              An amazing Night Market description that lasts for many pagraphs.
              It is so amazing that wow I can't even type it all out. So cool.
              Such grace. Truly tremendous.
                </h5>
            <br />

            <h5>
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} size='2x' /> Jiufen
            </h5>

          </Col>
          <Col md="4" sm="12">
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