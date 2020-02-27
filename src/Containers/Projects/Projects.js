import React, { Component } from 'react';
import './Projects.css'
import Card from 'react-bootstrap/Card'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-flex">
                    <Card style={{ width: '18rem' }} bg="dark" border="secondary" className="projects-card">
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
                                >Git ->
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="secondary" className="projects-card">
                        <Card.Body>
                            <Card.Title>Congklak Minimax</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                A Congklak Game Bot, made using
                                Artificial Intelligence : Minimax
                                Algorithm and Alpha-Beta Pruning.
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="secondary" className="projects-card">
                        <Card.Body>
                            <Card.Title>Engima Cinema Website</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">HTML | CSS | JS | PHP</Card.Subtitle>
                            <Card.Text>
                                A Cinema Website called Engima,
                                simulating a real cinema website.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="secondary" className="projects-card">
                        <Card.Body>
                            <Card.Title>TCP UDP Socket Connection</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                A UDP Connection simulating a TCP
                                connection, used for transferring files.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/ferdysan360/TCP-UDP-Socket-Connection"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git ->
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="secondary" className="projects-card">
                        <Card.Body>
                            <Card.Title>BFS and A* Maze Solver</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
                            <Card.Text>
                                A Maze Solver program using BFS and
                                A* Algorithm.
                            </Card.Text>
                            <Card.Link
                                href="https://github.com/yoelsusanto/BFS-AStar-MazeExplorer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Git ->
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" border="secondary" className="projects-card">
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
                            >Git ->
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Projects