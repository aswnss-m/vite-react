import "../assets/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faPython, faMarkdown, faGit,} from '@fortawesome/free-brands-svg-icons'

function About() {
    // const skills = {
    //     faHtml5 : 'HTML',
    //     faCss3 : 'CSS',
    //     faReact:'React',
    //     faPython:'Python',
    //     faMarkdown:'Markdown',
    //     faGit:'Git'
    // };
    return (
        <div className="about">
            <h1>
                About
            </h1>
            <div className="skills">
                <h3>Skills</h3>
                <div className="skillSet">
                    {/* {Object.entries(skills).map(([key,value])=>(
                        <span>
                            
                            <FontAwesomeIcon icon=key size="4x" />
                            <p>{value}</p>
                        </span>
                    ))} */}
                    <span>
                        <FontAwesomeIcon icon={faHtml5} size="3x" />
                        <p>Html</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faCss3} size="3x" />
                        <p>CSS</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <p>React</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faMarkdown} size="3x" />
                        <p>Markdown</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faGit} size="3x" />
                        <p>git</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <p>Python</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faMarkdown} size="3x" />
                        <p>Markdown</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About