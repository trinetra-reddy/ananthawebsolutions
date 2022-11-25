import React from 'react';
import './Ourculture.scss';
const Ourculture = props => {
    return (
        <>
        <div>
            <div className="culture-main">
            <span className="culture-head1">{props.name}</span>
            <span className="culture-head2"></span>
            <div className="culture-container">
                <img >{props.imgPath}</img>
                <div className="culture-decription">
                    <p>
                    {props.description}
                    </p>
                    <p>
                    {props.linkeddescription}
                    </p>
                </div>
            </div>

            </div>
            <div></div>
        </div>
        </>
    )
}

export default Ourculture;