import React, {useContext} from "react";
import './Experience.css'
import {themeContext} from "../../Context";

const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (

        <div className="experience" id='experience'>
                <span className='title' style={{color: darkMode ? 'white' : ''}}>Woeks for All these</span>
            <div className="achievement">
                <div className="circle">89</div>
                <span>Years</span>
                <span style={{color: darkMode ? '#febc36' : ''}}>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">89</div>
                <span>Years</span>
                <span style={{color: darkMode ? '#febc36' : ''}}>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">89</div>
                <span>Years</span>
                <span style={{color: darkMode ? '#febc36' : ''}}>Experience</span>
            </div>

        </div>)
}
export default Experience