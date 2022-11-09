import React from "react";
import { Link } from "react-router-dom";
import { Footer,Companymission,CompanyCulture,CompanyVision, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './About.scss';


const About = () => {
    return (
        <div>
            <Header />
            <div>
                <span>About Page!!</span> Link to <Link to={CONSTANTS.ROUTES.HOME_PAGE}>Home</Link>
            
            </div>
            <Companymission />
            <CompanyCulture />
            <CompanyVision />
            <Footer />
        </div>
    );
};

export default About;