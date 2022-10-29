import React from 'react';
import "./Quality.scss";
import sideimage from "./img.png";

const Quality=()=>{
    return(
        <>
            <div class="main">
                <div class="left">
                    <div class="h">
                        ABOUT US
                    </div>
                    <div class="p">
                        We Want Your Application to Have Best Quality Possible
                    </div>
                    <div class="c1">
                        <div class="block1">
                            Business-Oriented Software
                            <p id="p2">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                        <div class="block2">
                            Excellent Price-Quality Ratio
                            <p id="p2">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                    </div>
                    <div class="c2">
                        <div class="block3">
                        <p>Meetups for
                            Developers
                        </p>                       
                        <p id="p2">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                        <div class="block4">
                        Agile Responsible Development
                        <p id="p2">Sed ultricies eleifend eleifend.Sed tincidunt lectus justo.</p>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <img src={sideimage} alt="image" />
                </div>
            </div>
        </>
    );
};

export default Quality;