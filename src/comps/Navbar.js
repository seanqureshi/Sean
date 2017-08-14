import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../img/logo.png'
import cart from '../img/deathstar.png'
import '../css/nav.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className = "navigation">
                <Link to='/'>
                <img src= { logo } alt="Main Logo"></img>
                </Link>
                    <Link to='/shop'>SHOP</Link>
                    <Link to='/twitter'>CLEARANCE</Link>
                    <Link to='/cart'>
                    <img src= { cart } alt="Shopping Cart" width="75px"></img>
                    </Link>
            </nav>
        );
    }
}



