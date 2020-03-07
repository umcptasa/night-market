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
import Video from "components/General/Video";

const SectionAboutUs = (props) => {

  return (
    <>
      {/*  <div className="section section-image text-center" id="about-us"
      style={{
         backgroundImage: "url(" + require("assets/img/background.jpg") + ")"
       }}> */}
      <div className="section section-dark text-center" id="about-us">
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
                An amazing Night Market description that lasts for many paragraphs.
                It is so amazing that wow I can't even type it all out. So cool.
                Such grace. Truly tremendous. Something about 小吃. Something about 夜市. Nice.
                Thank you for reading this wonderful content
            </h5>
              <br />

              <h5 className="description">
                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} /> Jiufen
            </h5>

              <br />
              <Button
                className="btn-round"
                color="info"
                href=""
                onClick={e => e.preventDefault()}
              >
                See Details
                </Button>

            </Col>
            <Col className="ml-auto mr-auto" md="4" sm="12">
              <Video srcUrl="https://www.youtube.com/embed/liRAriTKG4w" title="Night Market 2018 Promo Video" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SectionAboutUs;