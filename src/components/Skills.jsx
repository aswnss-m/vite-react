import React from "react"
import "../assets/Skills.css"
import html from "../assets/logos/html.svg"
import css from "../assets/logos/css.svg"
import react from "../assets/logos/react.svg"
import octocat from "../assets/logos/octocat.svg"
import python from "../assets/logos/python.svg"
import photoshop from "../assets/logos/photoshop.svg"
import inkscape from "../assets/logos/inkscape.svg"
import figma from "../assets/logos/figma.svg"
function Skill() {
   return(
   <div className="skills">
    <h3>Skills</h3>
    <div className="skillSet">
        <span>
            <img src={html} alt="html5-logo" />
            <p>HTML</p>
        </span>
        <span>
            <img src={css} alt="css-logo" />
            <p>CSS</p>
        </span>
        <span>
            <img src={react} alt="react-logo" />
            <p>React</p>
        </span>
        <span>
            <img src={python} alt="python-logo" />
            <p>Python</p>
        </span>
        <span>
            <img src={octocat} alt="github-logo" />
            <p>git</p>
        </span>
        <span>
            <img src={photoshop} alt="photoshop-logo" />
            <p>Photoshop</p>
        </span>
        <span>
            <img src={inkscape} alt="inkscape-logo" />
            <p>Inkscape</p>
        </span>
        <span>
            <img src={figma} alt="figma-logo" />
            <p>Figma</p>
        </span>
    </div>
</div>
)
}
export default Skill