import React, {useContext} from "react";
import './Card.css'
import {themeContext} from "../../Context";

const Card = ({emoji, heading, details}) => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (

        <div className='card'>
            <img src={emoji} alt=""/>
            <span>{heading}</span>
            <span style={{color: darkMode ? 'white' : ''}}>{details}</span>

        </div>
    )
}
export default Card