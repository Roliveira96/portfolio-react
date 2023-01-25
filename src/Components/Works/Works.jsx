import React, {useContext} from "react";
import './Works.css'
import k13 from '../../img/k13.png'
import basis from '../../img/basis.png'
import emage from '../../img/emage.png'
import mtur from '../../img/mtur.png'
import g4 from '../../img/g4.png'
import {themeContext} from "../../Context";
import {motion} from "framer-motion";
const Works = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="works" id="works">
            {/* Left Side*/}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}></span>
                <span>Empresas e clientes</span>
                <span style={{color: darkMode? 'white': ''}}>
                    Essas são algumas das empresas que trabalhei recentemente:
                    <br/>
                    <br/>
                    - K13 Agência Web
                    <br/>
                    <br/>
                    - Emage Soluções
                    <br/>
                    <br/>
                    - Basis Tecnologia da Informação
                    <br/>
                    <br/>
                    - Ministério do Turismo

                </span>
                <div className="s-blur1" style={{background: '#abf1ff94'}}></div>
            </div>
            {/*right side*/}
            <div className="w-right">
                <motion.div

                    initial={{rotate: 50}}
                    whileInView={{rotate: 0}}
                    viewport={{margin:'-40px'}}
                    transition={{duration: 3.5, type:'spring'}}

                    className="w-mainCircle" style={{background: darkMode? 'rgba(89,91,93,0.57)': ''}}>
                    <div className="w-secCircle" style={{background: darkMode? '#bbbbbb': ''}}>
                        <img src={k13} alt=""/>
                    </div>
                    <div className="w-secCircle" style={{background: darkMode? '#bbbbbb': ''}}>
                        <img src={mtur} alt=""/>
                    </div>
                    <div className="w-secCircle" style={{background: darkMode? '#bbbbbb': ''}}>
                        <img src={basis} alt=""/>
                    </div>
                    <div className="w-secCircle" style={{background: darkMode? '#bbbbbb': ''}}>
                        <img src={emage} alt=""/>
                    </div> <div className="w-secCircle" style={{background: darkMode? '#bbbbbb': ''}}>
                        <img src={g4} alt=""/>
                    </div>
                </motion.div>
                {/*background circle*/}
                <motion.div style={{'z-index': darkMode? '-1': ''}}
                    initial={{left: '15px'}}
                    whileInView={{left: '0px'}}
                    viewport={{margin:'-40px'}}
                    transition={{duration:  3.5,  repeat: 10, repeatType: "reverse" }}
                    className="w-backCircle blueCircle"></motion.div>
                <motion.div
                    initial={{left: '15rem'}} whileInView={{left: '18rem'}}
                    viewport={{margin:'40px'}}
                    transition={{duration: 3.5,  repeat: 10, repeatType: "reverse" }}
                    className="w-backCircle yellowCircle"></motion.div>
            </div>
        </div>
    )

}
export default Works