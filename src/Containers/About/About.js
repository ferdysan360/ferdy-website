import React, { Component } from 'react';
import './About.css'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "About"
        }
    }

    render() {
        const { name } = this.state

        return (
            <div className="about-container">
                {name}
            </div>
        )
    }
}

export default About