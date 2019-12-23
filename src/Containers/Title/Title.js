import React, { Component } from 'react';
import './Title.css'
import Particles from 'react-particles-js'
import * as particle_params from './particle-params.json'

class Title extends Component {
    render() {
        return (
            <div className="title-container">
                <Particles
                    params={particle_params.default}
                    className="particles"
                />
                <div className="title">    
                    <h1 className="title-header">It's-a Me! Ferdy Santoso!</h1>
                    <br/>
                    <a href="#Experience">
                        <h4 className="scroll-down">Scroll Down<span><br/><h4 className="scroll-down">v</h4></span></h4>
                    </a>
                </div>
            </div>
        )
    }
}

export default Title