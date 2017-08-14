import React, { Component } from 'react';
import clearance from '../img/clearance.png'
import '../css/clearance.css'

export default class Twitter extends Component {
    render() {
        return (
            <section className="Clearance">
                    <center><img src= { clearance } alt="Stormtrooper Helmet"></img></center>
            </section>
        )
    }
}