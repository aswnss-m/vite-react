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
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
        </ul>
        </div>
    )
}
export default Navbar