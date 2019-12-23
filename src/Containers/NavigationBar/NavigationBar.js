import React, { Component } from 'react';
import './NavigationBar.css'

class NavigationBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar-container">
                <a href="#">Title</a>
                <a href="#Experience">Experience</a>
                <a href="#Projects">Projects</a>
                <a href="#About">About</a>
            </div>
        )
    }
}

export default NavigationBar