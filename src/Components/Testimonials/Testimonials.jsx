import React, {useContext} from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import './Testimonials.css'
import prof1 from '../../img/profile1.jpg'
import prof2 from '../../img/profile2.jpg'
import prof3 from '../../img/profile3.jpg'
import prof4 from '../../img/profile4.jpg'
import prof5 from '../../img/profile5.jpg'
import prof6 from '../../img/profile6.jpg'
import {Pagination} from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'
import {themeContext} from "../../Context";
const Testimonials = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const clients = [
        {
            img: prof1,
            review: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!'
        },
        {
            img: prof2,
            review: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!'
        },
        {
            img: prof3,
            review: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!'
        },
        {
            img: prof4,
            review: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!'
        },
        {
            img: prof5,
            review: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!'
        },
        {
            img: prof6,
            review: 'Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss deixa as pessoas mais interessantis.In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!'
        },
    ]
    return (

        <div className='t-wrapper' id="testimonials">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work</span>
                <span> From me ...</span>
                <div className="blur t-blur1" style={{background: 'rgba(253,197,15,0.29)'}}></div>
                <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
            </div>
            {/*Slider*/}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}


            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt=""/>
                                <span style={{color: darkMode? 'white': ''}}>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Testimonials