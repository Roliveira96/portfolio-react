import React, {useContext} from "react";
import './FloatingDiv.css'
import {themeContext} from "../../Context";
const FloatingDiv = ({image,txt1,txt2}) => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
   return (
       <div className="floatingdiv"
       style={{background: darkMode? 'rgba(75,75,75,0.56)': ''}}>
           <img src={image} alt=""/>
           <span>
               {txt1}<br/>{txt2}
           </span>
       </div>

   )
}

export default FloatingDiv