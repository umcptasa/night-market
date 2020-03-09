/**
 * Carousel component
 */

import React from "react";
import Img from "gatsby-image";
import {
    Card,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";

const GeneralCarousel = (props) => {
    const { items, id, title } = props;
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
            <div className="section pt-o" id={id}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center">{title}</h2>
                            <br />
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
                                                <Img className="img-rounded img-responsive" fluid={item.fluid} />
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
                                        <i className="nc-icon nc-minimal-left" />
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
                                        <i className="nc-icon nc-minimal-right" />
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
export default GeneralCarousel;