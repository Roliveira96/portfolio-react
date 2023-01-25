import React, {useContext} from "react";
import './Services.css'
import web3 from '../../img/web3.png'
import servidor from '../../img/servidor.png'
import php from '../../img/php.png'
import Card from "../Card/Card";
import {motion} from "framer-motion";
import {themeContext} from "../../Context";

const Services = () => {
    const transition = {duration: 3.5, type: 'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="services" id='services'>
            {/* Left Side*/}
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>Minhas</span>
                <span>Habilidades</span>
                <span style={{color: darkMode ? 'white' : ''}}>
                    Realmente eu sou o mil e uma utlidades. <br/>
                    Atuei por muito tempo no suporte técnico, no qual adquiri<br/> o espirito de  resolvedor de problemas.<br/>
                    Trabalho com várias técnologias e não tenho medo<br/> de novidades e desafios.
                    Sempre fui bem curioso e com isso<br/> procurei
                    me qualificar nessa area que gosto.

                    <br/>
                    <br/>
                    <b>Para mais detalhes, consulte o meu currículo:</b>
                </span>
                <button className="button s-button"> Download</button>
                <div className="s-blur1" style={{background: '#abf1ff94'}}></div>
            </div>
            {/*Right Side*/}
            <div className="cards">
               <motion.div

                   initial={{left:'-15rem'}}
                   whileInView={{left:'29rem'}}
                   transition={transition}
                   style={{left:'29rem'}}>
                   <Card
                       emoji = {servidor}
                       heading = {'Server Admin'}
                       details = {"Servidor Linux, Apache, Nginx, Exim, DSN, Dominios, Firewall"}
                   >

                   </Card>
               </motion.div>
                <motion.div
                    whileInView={{left:'16rem'}}
                    initial={{left:'25%'}}
                    transition={transition}
                    style={{  top:'3rem', left:'16rem'}}>
                   <Card
                       emoji = {php}
                       heading = {'Desenvolvedor Web (Back-end)'}
                       details = {"PHP, Laravel, NodeJS, Angular, Java, Android, RestFull"}
                   >

                   </Card>
               </motion.div>
                <motion.div
                    whileInView={{left:'3rem'}}
                    initial={{left:'-5rem'}}
                    transition={transition}
                    style={{ left: '3rem'}}>
                    <Card
                        emoji={web3}
                        heading={'Desenvolvedor Web (Front-end)'}
                        details={"HTML, CSS, JavaScript, React, VueJs, Nuxt "}
                    >

                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default Services