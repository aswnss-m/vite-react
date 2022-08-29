import React, { useState } from "react"
import '../assets/Navbar.css'


function Navbar() {
    const [IsShown,setIsShown] = useState(false);

    return (
        <div className="nav">
            <a
                onMouseEnter = {()=>setIsShown(true)}
                onMouseLeave = {()=>setIsShown(false)} >
                {IsShown && ('Aswin Lal')}
                {!IsShown && ('Aswnss')}
            </a>
        <ul>
            <li><a href="#About">about</a></li>
            <li><a href="#Projects">projects</a></li>
            <li><a href="#Contact">contact</a></li>
        </ul>
        </div>
    )
}
export default Navbar