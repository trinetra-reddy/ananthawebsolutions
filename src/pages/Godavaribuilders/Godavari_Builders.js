import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header,Properties } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Godavari_Builders.scss';

const Godavari_Builders = () => {
    return (
        <div> 
            <Header />
            <Properties />
            <Footer />
        </div>
    );
};

export default Godavari_Builders;