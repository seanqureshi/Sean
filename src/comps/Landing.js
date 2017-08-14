import React, { Component } from 'react';
import kylo from '../img/kylo2.png';
import "../css/landing.css"
// import { Link } from 'react-router-dom'


export default class Landing extends Component {
    render() {
        return (
            <section className="Landing">
                <main className="main-background">
                    <center><img src= { kylo } alt="Kylo"></img></center>
                    {/* <h3 className = "main-text">MAY THE FORCE BE WITH YOU THIS HALLOWEEN!</h3> */}
                    {/* <Link to="/shop"><button className="button-main"><h3>SHOP NOW!</h3></button></Link> */}
				</main>
            </section>
        )
    }
}