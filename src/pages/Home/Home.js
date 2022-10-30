import React from "react";
import { Link } from "react-router-dom";
import { Header, Banner ,Tech, Whychooseus, About,Quality,GetTouch ,Footer,Ourteam } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home-main">
            <Header />
            <Banner />
            {/* <div>
                <span>Home Page!!</span> Link to <Link to={CONSTANTS.ROUTES.SERVICES_PAGE}>Services</Link>
            </div>
            <Banner />
            <Whychooseus />
            <About />
            <GetTouch />
            </div> */}
            <Tech />
            <Whychooseus />
            <About />
            <Quality />
            <GetTouch />
            <Ourteam />
            <Footer />
        </div>
    );
};

export default Home;
