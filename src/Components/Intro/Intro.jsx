import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vetor1 from '../../img/Vector1.png'
import Vetor2 from '../../img/Vector2.png'
import Boy from  '../../img/boy.png'
import Thumbup from  '../../img/thumbup.png'
import Crown from  '../../img/crown.png'
import Glassesimoji from  '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! Am </span>
                    <span>Ricardo de Oliveira </span>
                    <span> Backend developer, com experiecia de 2 anos de mercado, resolvendo n problemas</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="#"><img src={Github} alt=""/></a>
                    <a href="#"><img src={Linkedin} alt=""/></a>
                    <a href="#"><img src={Instagram} alt=""/></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vetor1} alt=""/>
                <img src={Vetor2} alt=""/>
                <img src={Boy} alt=""/>
                <img src={Glassesimoji} alt=""/>
                <div style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv image={Crown} txt1={'Web'} txt2={'Developer'}/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={Thumbup} txt1={'Best Design'} txt2={'Award'}/>
                </div>
                {/*Blur div*/}
            <div className="blur" style={{background: 'rgba(16,131,236,0.22)'}}></div>
            <div className="blur" style={{background: 'rgba(255,210,51,0.34)', top:'17rem',width: '21rem',left:'-9rem' }}></div>
            </div>
        </div>
    )
}
export default Intro