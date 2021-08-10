import React, { Component } from 'react';
import './Experience.css'
import Card from 'react-bootstrap/Card'

class Experience extends Component {
    render() {
        return (
            <div className="experience-container">
                <h1 className="experience-title">Experience</h1>
                <h2>Work</h2>
                <div className="experience-flex">
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="experience-card">
                        <Card.Body>
                            <Card.Title>SejutaCita Indonesia</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Frontend Web Developer</Card.Subtitle>
                            <Card.Text>
                                • Develop Sejutacita's main website pages
                                <br/>
                                • Develop Sejutacita's website for Event Organizer
                                <br />
                                • Develop Sejutacita's admin page
                                <br />
                                • Develop and Maintain new UI Components
                                <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="experience-card">
                        <Card.Body>
                            <Card.Title>Gameloft</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Game Programmer - Android Research &amp; Development</Card.Subtitle>
                            <Card.Text>
                                • Research new features in Android that can be implemented in Gameloft's games.
                                <br/>
                                • Game Development using OpenGL ES.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="experience-card">
                        <Card.Body>
                            <Card.Title>STEI ITB</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Programming Laboratory Assistant</Card.Subtitle>
                            <Card.Text>
                                for the following course:
                                <br/>
                                • Object Oriented Programming course
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h2>Organization</h2>
                <div className="experience-flex">
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="experience-card">
                        <Card.Body>
                            <Card.Title>Himpunan Mahasiswa Informatika (HMIF) ITB</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Academic and Welfare</Card.Subtitle>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="experience-card">
                        <Card.Body>
                            <Card.Title>Unit Kebudayaan Jepang (UKJ) ITB</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Music Division</Card.Subtitle>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Experience