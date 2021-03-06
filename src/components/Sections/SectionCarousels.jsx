/**
 * Component representing the food, games, and culture carousels
 */

import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import FoodCarousel from "components/Carousels/FoodCarousel";
import GamesCarousel from "components/Carousels/GamesCarousel";


function SectionCarousels() {
  return (
    <div className="section" id="gallery">
      <Container>
        <Row>
          <Col sm="12" md="6">
            <FoodCarousel />

          </Col>
          <Col sm="12" md="6">
            <GamesCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionCarousels;
