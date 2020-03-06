/**
 * Title
 */

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionAboutUs from "components/Sections/SectionAboutUs";
import SectionCarousels from "components/Sections/SectionCarousels";
import Footer from "components/Footers/Footer";

import {
    Button,
  } from "reactstrap";

const HomePage = (props) => {

    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <SectionAboutUs />
                <SectionCarousels />
                <div className="section" >
                <Button
                  className="btn-round mr-1"
                  color="default"
                  outline
                  type="button"
                >
                  Default
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="primary"
                  outline
                  type="button"
                >
                  Primary
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="info"
                  outline
                  type="button"
                >
                  Info
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="success"
                  outline
                  type="button"
                >
                  Success
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="warning"
                  outline
                  type="button"
                >
                  Warning
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="danger"
                  outline
                  type="button"
                >
                  Danger
                </Button>
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  type="button"
                >
                  Neutral
                </Button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;