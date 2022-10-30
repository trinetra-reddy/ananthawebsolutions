import React from 'react';
import "./Quality.scss";
import sideimage from "./img.png";

const Quality=()=>{
    return(
        <>
            <div class="quality-main">
                <div class="quality-left">
                    <div class="quality-heading">
                        ABOUT US
                    </div>
                    <div class="quality-sub-heading">
                        <span>We Want Your Application<br></br> to Have Best Quality Possible</span>
                    </div>
                    <div class="quality-card">
                        <div class="quality-block">
                            Business-Oriented Software
                            <p id="quality-p">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                        <div class="quality-block">
                            Excellent Price-Quality Ratio
                            <p id="quality-p">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                    </div>
                    <div class="quality-card">
                        <div class="quality-block">
                        Meetups for  Developers
                                           
                        <p id="quality-p">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                        <div class="quality-block">
                        Agile Responsible Development
                        <p id="quality-p">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                    </div>
                </div>

                <div class="quality-right">
                    <img src={sideimage} alt="image" />
                </div>
            </div>
        </>
    );
};

export default Quality;