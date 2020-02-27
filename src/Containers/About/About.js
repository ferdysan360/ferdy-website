import React, { Component } from 'react';
import './About.css'
import '../../Assets/facebook.png'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="about-title">About</h1>
                <div className="about-flex">
                    <div className="about-item-me">
                        <p className="me-paragraph">
                            Hi! My name is Ferdy Santoso and I am a third year Informatics Student at Institut Teknologi Bandung,
                            Indonesia. I am currently living in Bandung but I am originally from Semarang. I am passionate in
                            the field of Computer Science and Software Engineering. I like programming and developing
                            software.
                        </p>
                    </div>
                    <div className="about-item-contacts">
                        <h4 className="contacts-header">Find me on...</h4>
                        <div className="contacts-item">
                            <a href="https://www.facebook.com/ferdy.santoso.520" target="_blank" rel="noopener noreferrer">
                                <img src={require("../../Assets/facebook.png")} alt="facebook"/>
                                <h5>Ferdy Santoso</h5>

                            </a>
                        </div>
                        <br/>
                        <div className="contacts-item">
                            <a href="https://www.linkedin.com/in/ferdy-santoso-063a73149/" target="_blank" rel="noopener noreferrer">
                                <img src={require("../../Assets/linkedin.png")} alt="linkedin" />
                                <h5>Ferdy Santoso</h5>

                            </a>
                        </div>
                        <br />
                        <div className="contacts-item">
                            <a href="https://github.com/ferdysan360" target="_blank" rel="noopener noreferrer">
                                <img src={require("../../Assets/github.png")} alt="github"/>
                                <h5>ferdysan360</h5>
                            </a>
                        </div>
                        <br/>
                        <div className="contacts-item">
                            <a href="https://gitlab.com/13517116" target="_blank" rel="noopener noreferrer">
                                <img src={require("../../Assets/gitlab.png")} alt="gitlab"/>
                                <h5>ferdysan</h5>
                            </a>
                        </div>
                        <br/>
                        <div className="contacts-item">
                            <a href="mailto:ferdysantoso9999@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={require("../../Assets/gmail.png")} alt="gmail"/>
                                <h5>ferdysantoso9999@gmail.com</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About