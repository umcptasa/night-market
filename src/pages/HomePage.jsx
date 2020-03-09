/**
 * Title
 */

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionAboutUs from "components/Sections/SectionAboutUs";
import SectionCarousels from "components/Sections/SectionCarousels";
import SectionSchedule from "components/Sections/SectionSchedule";
import SectionTicketing from "components/Sections/SectionTicketing";
import Footer from "components/Footers/Footer";

const HomePage = (props) => {

    return (
        <div className="home-page">
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <SectionAboutUs />
                <SectionTicketing />
                <SectionCarousels />
                <SectionSchedule />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;