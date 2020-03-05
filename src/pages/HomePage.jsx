/**
 * Title
 */

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionAboutUs from "components/Sections/SectionAboutUs";

const HomePage = (props) => {

    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <SectionAboutUs />
            </div>
        </>
    );
};

export default HomePage;