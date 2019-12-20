import React, { Component } from 'react';
import './Experience.css'

class Experience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Experience"
        }
    }

    render() {
        const { name } = this.state

        return (
            <div className="experience-container">
                {name}
            </div>
        )
    }
}

export default Experience