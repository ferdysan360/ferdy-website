import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Projects"
        }
    }

    render() {
        const { name } = this.state

        return (
            <div className="projects-container">
                {name}
            </div>
        )
    }
}

export default Projects