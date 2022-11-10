import React from "react";
import { Link } from "react-router-dom";
import { Footer,Contactus,Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <Header />
     
            <Contactus/>
            <Footer />
        </div>
    );
};

export default Contact;