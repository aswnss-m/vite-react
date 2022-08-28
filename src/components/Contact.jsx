import React from "react";
import "../assets/Contact.css";
import linkedin from "../assets/logos/linkedin.svg";
import github from "../assets/logos/octocat.svg";
import instagram from "../assets/logos/instagram.svg";

function Contact() {
    return(
        <div className="contact">
            <h1>
                Contact
            </h1>
            <div className="contactSection">
                <div className="emailSection">
                    <h3>Email</h3>
                    <a href="mailto:aswinlalsct@gmail.com">aswinlalsct@gmail</a>
                </div>
                <div className="socialLinkSection">
                    <h3>Social links</h3>
                    <section className="socialLink">
                        <a href="www.linkedin.com/in/aswnss">
                            <img src={linkedin} alt="Linkedin-logo" />
                        </a>
                        <a href="www.github.com/aswnss-m">
                            <img src={github} alt="Github-logo" />
                        </a>
                        <a href="www.instagram.com/aswnss">
                            <img src={instagram} alt="Instagram-logo" />
                        </a>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Contact;