import React from "react";
import { Link } from "react-router-dom";
import { Header, Banner , About ,Tech,Quality, Footer, Whychooseus,Ourteam } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./Home.scss";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            {/* <div>
                <span>Home Page!!</span> Link to <Link to={CONSTANTS.ROUTES.SERVICES_PAGE}>Services</Link>
            </div> */}
            <Tech />
            <Whychooseus />
            <About />
            <Quality />
            <Ourteam />
            <Footer />
        </div>
    );
};

export default Home;
