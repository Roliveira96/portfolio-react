import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import {Link} from "react-scroll"

const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name">Ricardo</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='services' smooth={true} >
                            <li>Habilidades</li>
                        </Link>
                        <Link spy={true} to='works' smooth={true} >
                            <li>Clientes</li>
                        </Link>
                        <Link spy={true} to='portfolio' smooth={true} >
                            <li>Portfólio</li>
                        </Link>
                        <Link spy={true} to='contact' smooth={true} >
                            <li>Contato</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar