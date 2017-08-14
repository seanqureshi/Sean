import React, { Component } from 'react';
import solo from '../img/hansolo.jpg'

export default class Cart extends Component {
    render() {
        return (
            <section className="Cart">
                <img src= { solo } alt="Han Solo Shopping Cart" width="100%"></img>
            </section>
        )
    }
}