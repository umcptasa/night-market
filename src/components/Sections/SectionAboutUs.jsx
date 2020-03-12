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
      <div className="section section-dark section-about-us" id="about-us">
        <img className="lantern-banner left" alt="lantern banner" src={require("assets/img/lantern-banner.png")} />
        <img className="lantern-banner right" alt="lantern banner" src={require("assets/img/lantern-banner.png")} />

        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8" sm="12">
              <h2 className="title text-left">What is a Night Market?</h2>

              <h5 className="description text-left">
                An amazing Night Market description that lasts for many paragraphs.
                It is so amazing that wow I can't even type it all out. So cool.
                Such grace. Truly tremendous. Something about 小吃. Something about 夜市. Nice.
                Thank you for reading this wonderful content
            </h5>

              <h3 className="description">
                <FontAwesomeIcon className="icon icon-success" icon={faMapMarkerAlt} /> Jiufen
              </h3>

              <h5 className="description text-left">
                Jiufen is a cool city. More info about Jiufen. A link to more information about Jiufen
              </h5>
              <br />

              <Row>
                <Col className="ml-auto mr-auto" sm="6">
                  <Button
                    className="btn-round"
                    color="info"
                    href="https://www.facebook.com/umcptasa/"
                    block
                  >
                    See Details
                </Button>
                </Col>
              </Row>




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