import React, {useContext} from "react";
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vetor1 from '../../img/Vector1.png'
import Vetor2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import yes from '../../img/yes.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {themeContext} from "../../Context";
import {motion} from 'framer-motion'
import Insta from '@iconscout/react-unicons/icons/uil-telegram'

const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (<div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode ? 'white' : ''}}>Olá! Me chamo </span>
                    <span>Ricardo de Oliveira </span>
                    <span>Sou desenvolvedor Back-end com conhecimento em diversas técnologias, como HTML, JavaScript, CSS, PHP, MySQL, Java, Git, restFull, JavaWeb, Android.<br/>
                          Já atuei com gestor de suporte técnico, responsável pela administração dos servidores web (WHM/Cpanel).
                    </span>
                </div>

                <a href='https://api.whatsapp.com/send?phone=5542999486362' className="button i-button">WhatsApp</a>
                <div className="i-icons">
                    <a href="https://github.com/Roliveira96" target="_blank"><img src={Github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/ricardodeoliveira96/" target="_blank"><img src={Linkedin} alt=""/></a>
                    <a href="https://www.instagram.com/ricardo_de_oliveira96/" target="_blank"><img src={Instagram} alt=""/></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vetor1} alt=""/>
                <img src={Vetor2} alt=""/>
                <img src={Boy} alt=""/>
                <motion.div
                    initial={{top: '-4%',left: '-35%'}}
                    whileInView={{left: '-15%'}}
                    transition={transition}
                    style={{top: '-4%', left: '68%'}}
                    className='floating-div'>
                    <FloatingDiv image={yes} txt1={'Seriços web'} txt2={'Apache, DNS, Nginx'}/>
                </motion.div>
                <motion.div
                    initial={{top: '-4%', left: '75%'}}
                    whileInView={{left: '71%'}}
                    transition={transition}
                    style={{top: '-4%', left: '68%'}}
                    className='floating-div'>
                    <FloatingDiv image={Crown} txt1={'Desenvolvedor'} txt2={'Web PHP'}/>
                </motion.div>
                <motion.div
                    initial={{left: '9rem', top: '18rem'}}
                    whileInView={{left: '0%'}}
                    transition={transition}
                    style={{top: '18rem', left: '0rem'}}
                    className='floating-div'>
                    <FloatingDiv image={Thumbup} txt1={'Experiência'} txt2={'Com servidores'}/>
                </motion.div>
                {/*Blur div*/}
                <div className="blur" style={{background: 'rgba(16,131,236,0.22)'}}></div>
                <div className="blur"
                     style={{background: 'rgba(255,210,51,0.34)', top: '17rem', width: '21rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}
export default Intro