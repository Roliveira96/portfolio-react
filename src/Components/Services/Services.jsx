import React from "react";
import './Services.css'
import HeartEmoj from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Card from "../Card/Card";

const Services = () => {
    return (
        <div className="services">
            {/* Left Side*/}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <spane>Lorem ispum is simples lalalal alalalal lallalalalal
                    <br/>
                    mais lalalalala lalaaaaa
                </spane>
                <button className="button s-button"> Download CV</button>
                <div className="s-blur1" style={{background: '#abf1ff94'}}></div>
            </div>
            {/*Right Side*/}
            <div className="cards">
               <div>
                   <Card
                       emoji = {HeartEmoj}
                       heading = {'Design'}
                       details = {"Figma, Photoshop, Adobe, PHP, PHPStorm"}
                   >

                   </Card>
               </div>
            </div>
        </div>
    )
}

export default Services