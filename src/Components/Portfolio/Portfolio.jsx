import React, {useContext} from "react";
import './Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react"
import web1 from '../../img/web1.gif'
import automat from '../../img/automacaoLinphone.png'
import glass from '../../img/glass.png'
import je from '../../img/je.png'
import 'swiper/css'
import {themeContext} from "../../Context";
const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="portfolio" id="portfolio">
            {/*Heading*/}
            <span style={{color: darkMode? 'white': ''}}>Projetos Pessoais Recentes</span>
            <span>Portfólio</span>
            {/*Swiper*/}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
                <SwiperSlide>
                    <a href="https://github.com/Roliveira96/portfolio1"><img src={web1} alt=""/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Roliveira96/linphone-instalation"><img src={automat} alt=""/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Roliveira96/glasswebsite"><img src={glass} alt=""/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Roliveira96"><img src={je} alt=""/></a>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default Portfolio
