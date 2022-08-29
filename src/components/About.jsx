import "../assets/About.css"
import Skills from "./Skills"
import Projects from "./Projects"

function About() {

    return (
        <div className="about" id="About"> 
            <h1>
                About
            </h1>
            <div className="subSection">
               <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default About