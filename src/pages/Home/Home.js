import React from "react";
import { Link } from "react-router-dom";
import { Header, Banner , About ,Footer, Whychooseus } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <span>Home Page!!</span> Link to <Link to={CONSTANTS.ROUTES.SERVICES_PAGE}>Services</Link>
            </div>
            <Whychooseus />
            <Banner />
            <About />
            <Footer />
        </div>
    );
};

export default Home;