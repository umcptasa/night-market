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


function SectionCarousels() {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col sm="6">
            <FoodCarousel />
            
          </Col>
          <Col sm="6">
            <FoodCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionCarousels;
