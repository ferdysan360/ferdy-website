import React, { Component } from 'react';
import './About.css'
import FacebookLogo from '../../Assets/facebook.png'
import LinkedInLogo from '../../Assets/linkedin.png'
import GithubLogo from '../../Assets/github.png'
import GitlabLogo from '../../Assets/gitlab.png'
import GmailLogo from '../../Assets/gmail.png'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="about-title">About</h1>
                <div className="about-flex">
                    <div className="about-item-me">
                        <p className="me-paragraph">
                            Hi! My name is Ferdy Santoso and I am a Software Engineer. I studied 
                            in the field of Computer Science/Informatics at Institut Teknologi Bandung,
                            Indonesia. I am currently living in Semarang. I am passionate in software 
                            enginnering and I like developing software.
                        </p>
                    </div>
                    <div className="about-item-contacts">
                        {/* <h4 className="contacts-header">Find me on...</h4>
                        <div className="contacts-item">
                            <a href="https://www.facebook.com/ferdy.santoso.520" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookLogo} alt="facebook"/>
                                <h5>Ferdy Santoso</h5>

                            </a>
                        </div>
                        <br/> */}
                        <div className="contacts-item">
                            <a href="https://www.linkedin.com/in/ferdy-santoso-063a73149/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInLogo} alt="linkedin" />
                                <h6>Ferdy Santoso</h6>
                            </a>
                        </div>
                        <br />
                        <div className="contacts-item">
                            <a href="https://github.com/ferdysan360" target="_blank" rel="noopener noreferrer">
                                <img src={GithubLogo} alt="github"/>
                                <h6>ferdysan360</h6>
                            </a>
                        </div>
                        <br/>
                        <div className="contacts-item">
                            <a href="https://gitlab.com/13517116" target="_blank" rel="noopener noreferrer">
                                <img src={GitlabLogo} alt="gitlab"/>
                                <h6>ferdysan</h6>
                            </a>
                        </div>
                        <br/>
                        <div className="contacts-item">
                            <a href="mailto:ferdysantoso9999@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={GmailLogo} alt="gmail"/>
                                <h6>ferdysantoso9999@gmail.com</h6>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About