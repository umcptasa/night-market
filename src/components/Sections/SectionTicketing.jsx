import React from "react";

import { Container, Row, Col} from "reactstrap";

const SectionTicketing = (props) => {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div className="section section-image" data-parallax={true} ref={pageHeader}
                style={{
                    backgroundImage: "url(" + require("assets/img/jiufen-teahouse-night.jpg") + ")"
                }}
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
            </div>
        </>
    );
};
export default SectionTicketing;