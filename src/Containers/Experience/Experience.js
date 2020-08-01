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
                            <Card.Title>Gameloft</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Game Programmer</Card.Subtitle>
                            <Card.Text>
                                I worked as a game programmer in Gameloft Indonesia. There i learned
                                game making and game development process
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