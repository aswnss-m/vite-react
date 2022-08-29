import React from "react"
import "../assets/Projects.css"

function Projects() {
    return(
    <div className="projects" id="Projects">
        {/* To Do : Change this design to use a table instead of divs */}
        <h3>Projects</h3>
  
       {/* Project Two */}
       <div className="projectSet">
            <h4 className="projectName">
                House Prize Estimator
            </h4>
            <span className="projectDetails">
                <p>
                Machine learning project, estimates a house price based on no of ...
                </p>
                <a href="https://laura-ml-project.herokuapp.com/">Live</a>
                <a href="https://www.github.com/aswnss-m/Machine-Learning">Github</a>
                <section className="projectCodeSection">
                    <span className="projectCode">Python</span>
                    <span className="projectCode">Flask</span>
                    <span className="projectCode">Heroku</span>
                    <span className="projectCode">HTML/CSS</span>
                </section>
            </span>
        </div>
        {/* Project Two End */}
       {/* Project Three */}
       <div className="projectSet">
            <h4 className="projectName">
                HTML / C Lab questions
            </h4>
            <span className="projectDetails">
                <p>
                Contains all the lab projects for BSC Computer Science Students , <br /> Password = 'Sajitha7012'
                </p>
                <a href="https://aswnss-m.github.io/Sajitha/">Live</a>
                <a href="https://github.com/aswnss-m/Sajitha">Github</a>
                <section className="projectCodeSection">
                    <span className="projectCode">Python</span>
                    <span className="projectCode">C</span>
                    <span className="projectCode">HTML/CSS</span>
                </section>
            </span>
        </div>
        {/* Project Three End */}
       {/* Project Three */}
       <div className="projectSet">
            <h4 className="projectName">
                Morse Code Generator
            </h4>
            <span className="projectDetails">
                <p>
                Generate Morse Code of String
                </p>
                <a href="https://github.com/aswnss-m/Morse-Code">Github</a>
                <section className="projectCodeSection">
                    <span className="projectCode">Python</span>
                </section>
            </span>
        </div>
        {/* Project Three End */}
             {/* Project One */}
       <div className="projectSet">
            <h4 className="projectName">
                Basic Python Apps
            </h4>
            <span className="projectDetails">
                <p>
                    Novice Python Programms sorting , calculator , array manipulations , armstrong numbers , youtube downloader, encrytion etc.
                </p>
                <a href="https://www.github.com/aswnss-m/python_projects">Github</a>
                <section className="projectCodeSection">
                    <span className="projectCode">Python</span>
                </section>
            </span>
        </div>
        {/* Project One End */}
       {/* Project Three */}
       <div className="projectSet">
            <h4 className="projectName">
                Note Pad
            </h4>
            <span className="projectDetails">
                <p>
                Simple Notepad application using python and tkinter
                </p>
                <a href="https://github.com/aswnss-m/notepad">Github</a>
                <section className="projectCodeSection">
                    <span className="projectCode">Python</span>
                </section>
            </span>
        </div>
        {/* Project Three End */}
    </div>
    )
}
export default Projects