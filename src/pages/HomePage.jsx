/**
 * Title
 */

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionAboutUs from "components/Sections/SectionAboutUs";
import SectionCarousels from "components/Sections/SectionCarousels";
import Footer from "components/Footers/Footer";

const HomePage = (props) => {

    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <SectionAboutUs />
                <SectionCarousels />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;