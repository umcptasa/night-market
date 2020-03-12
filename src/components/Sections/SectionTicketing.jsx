import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import BackgroundImage from 'gatsby-background-image';

const SectionTicketing = (props) => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "jiufen-teahouse-night.jpg"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
        }
      } 
    `);

    return (
        <>
            <BackgroundImage
                Tag="section"
                className="section section-image"
                fluid={data.file.childImageSharp.fluid}
            >
                <Container>
                    <Row>
                        <Col sm="12">
                            <h2 className="title text-center" >Ticketing</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-left" sm="8">
                            <h5 className="description">Some great text about ticketing that's super duper long and super cool. OMG the best information there is</h5>
                        </Col>
                        <Col className="text-right" sm="4">
                            <h5 className="description">This background won't be the actual background. Sorry.</h5>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
        </>
    );
};
export default SectionTicketing;