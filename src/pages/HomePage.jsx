/**
 * Title
 */

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer";
import SectionAboutUs from "components/Sections/SectionAboutUs";
import SectionCarousels from "components/Sections/SectionCarousels";
import SectionSchedule from "components/Sections/SectionSchedule";
import SectionTicketing from "components/Sections/SectionTicketing";
import SectionSponsors from "components/Sections/SectionSponsors";

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
                <SectionSponsors />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;