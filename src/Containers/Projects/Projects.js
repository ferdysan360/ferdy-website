import React, { Component } from 'react';
import './Projects.css'
import Card from 'react-bootstrap/Card'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-flex">
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>LINE Today</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | CSS | JS | REACT</Card.Subtitle>
                            <Card.Text>
                                A LINE Today Replica. Uses API from LINE Today.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/ferdysan360/Line-Today"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>Media Steganography</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | CSS | JS | REACT</Card.Subtitle>
                            <Card.Text>
                                A website used for applying steganography on Image,
                                Audio, and Video files.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/novendraw/media-steganography"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>Essence Project V2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | CSS | JS | METEOR | MongoDB</Card.Subtitle>
                            <Card.Text>
                                A Software Project Management Tools for planning, 
                                using Essence standard.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/ferdysan360/Essence-Project-V2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>ITB NIM Finder</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | CSS | JS | REACT</Card.Subtitle>
                            <Card.Text>
                                A NIM Finder project for ITB. Made for
                                Programming Laboratory selection
                                assignment.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/ferdysan360/Simple-NIM-Finder-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>Engima Cinema Website</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | CSS | JS | PHP</Card.Subtitle>
                            <Card.Text>
                                A Cinema Website called Engima,
                                simulating a real cinema website.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>VOYAGIA</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Unity</Card.Subtitle>
                            <Card.Text>
                                A 3D Puzzle and Platformer Game. It tells a story about A Robot 
                                that lost its memories and is trying to get it back.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/xio84/StoryBook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>Night of The Dead</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Unity</Card.Subtitle>
                            <Card.Text>
                                Night of The Dead is a 2D Wave Survival zombie game.
                            </Card.Text>
                            <Card.Link
                                href="https://gitlab.informatika.org/ferdysan/if3210-2020-unity-13517116"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="success" className="projects-card">
                        <Card.Body>
                            <Card.Title>Object Oriented Engi's Farm</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">C++</Card.Subtitle>
                            <Card.Text>
                                A harvest-moon-like game developed
                                using object oriented programming
                                paradigm.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/ferdysan360/ObjectOriented-Engis-Farm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git -&gt;
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Projects