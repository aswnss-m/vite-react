import React from "react"
import "../assets/Projects.css"

function Projects() {
    return(
    <div className="projects">
        <h3>Projects</h3>
        <div className="projectSet">
            <h4 className="projectName">Sample Headisjhdisjiosdjfiojsdiofjsiodjiojing</h4>
            <span className="projectDetails">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet officia reprehenderit quae, porro labore a impedit expedita sint quod mollitia, dolores aspernatur optio fugit maxime laboriosam facere voluptas eos?</p>
                <a href="#">Live</a>
                <a href="#">Github</a>
                <section className="projectCodeSection">
                    <span className="projectCode">React</span>
                    <span className="projectCode">HTML</span>
                    <span className="projectCode">CSS</span>
                </section>
            </span>
        </div>
    </div>
    )
}
export default Projects