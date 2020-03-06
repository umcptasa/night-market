/**
 * Carousel for food pictures
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
  } from "reactstrap";

const FoodCarousel = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
            relativeDirectory: {eq: "food"}
        }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `);

    const items = data.allFile.edges.map(item => {
        return {
            key: item.node.childImageSharp.id,
            fluid: item.node.childImageSharp.fluid,
        };
    });

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    return (
        <>
            <div className="section pt-o" id="food-carousel">
                <Container>
                    <Row>          
                        <Col>
                            <h2 className="text-center">Food</h2>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <Card className="page-carousel">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
                                >
                                    <CarouselIndicators
                                        items={items}
                                        activeIndex={activeIndex}
                                        onClickHandler={goToIndex}
                                    />
                                    {items.map(item => {
                                        return (
                                            <CarouselItem
                                                onExiting={onExiting}
                                                onExited={onExited}
                                                key={item.key}
                                            >
                                                <Img fluid={item.fluid} />
                                                {/* <CarouselCaption
                                                    captionText={item.caption}
                                                    captionHeader=""
                                                /> */}
                                            </CarouselItem>
                                        );
                                    })}
                                    <a
                                        className="left carousel-control carousel-control-prev"
                                        data-slide="prev"
                                        onClick={e => {
                                            e.preventDefault();
                                            previous();
                                        }}
                                        role="button"
                                    >
                                        <span className="fa fa-angle-left" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a
                                        className="right carousel-control carousel-control-next"
                                        data-slide="next"
                                        onClick={e => {
                                            e.preventDefault();
                                            next();
                                        }}
                                        role="button"
                                    >
                                        <span className="fa fa-angle-right" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </Carousel>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default FoodCarousel;