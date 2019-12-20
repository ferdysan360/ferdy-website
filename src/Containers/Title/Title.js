import React, { Component } from 'react';
import './Title.css'
import Particles from 'react-particles-js'
import * as particle_params from './particle-params.json'

class Title extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Ferdy"
        }
    }

    render() {
        const { name } = this.state

        return (
            <div className="title-container">
                <Particles
                    params={particle_params.default}
                    className="particles"
                />
            </div>
        )
    }
}

export default Title