import React from "react";
import { Link } from "react-router-dom";
import { Footer,Companymission,CompanyCulture,CompanyVision, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './About.scss';


const About = () => {
    return (
        <div>
            <Header />
            <Companymission />
            <CompanyCulture />
            <CompanyVision />
            <Footer />
        </div>
    );
};

export default About;