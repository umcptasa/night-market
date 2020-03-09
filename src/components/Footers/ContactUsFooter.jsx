import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";

import {
    Container,
    Col,
    Row,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav
} from "reactstrap";

const ContactUsFooter = props => {
    return (
        <>
            <Navbar className="fixed-bottom navbar-light footer">
                <Container>
                    <NavbarBrand
                        className="navbar-brand"
                        data-placement="bottom"
                        href="/"
                        target="_blank"
                        title="UMCP TASA Night Market"
                    >
                    UMCP
                        {/* <img
                            className="navbar-image"
                            alt="TASA logo"
                            src={require("assets/img/tasa_logo_white.png")}
                        /> */}
                    </NavbarBrand>
                </Container>
            </Navbar>
        </>
    );
};

export default ContactUsFooter;
