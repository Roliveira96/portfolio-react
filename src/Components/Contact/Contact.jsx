import React, {useContext, useRef, useState} from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import {themeContext} from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_30fwv0a', 'template_nhspbcw', form.current, 'GDavqW2UdUlGcaTqj')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode ? 'white' : ''}}>Entre em contato</span>
                    <span>Comigo</span>
                    <div className="blur s-blur1" style={{background: 'rgba(171,241,255,0.58)'}}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Nome'/>
                    <input type="email" name='user_email' className='user' placeholder='E-mail'/>
                    <textarea name='message' className='user' placeholder='Mensagem'/>
                    <input type="submit" value='Send' className='button'/>
                    <span>{done && "Obrigado por enviar a sua mensagem!"}</span>
                    <div className="blur c-blur1" style={{background: 'rgba(253,209,61,0.34)'}}></div>
                </form>
            </div>
        </div>)
}
export default Contact