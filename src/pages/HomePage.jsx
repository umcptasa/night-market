/**
 * Title
 */

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

const HomePage = (props) => {

    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <h1>
                    Hello World
                </h1>


                <p>
                    This is my content
                </p>
            </div>
        </>
    );
};

export default HomePage;