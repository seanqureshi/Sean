import React, { Component } from 'react';
import {getCostume} from '../utils/api'
import costumes from '../img/sw1.png'
import '../css/characters.css'

export default class Shop extends Component {
    constructor(){
        super()

        this.state={
            characters: null
        }
    }

    componentDidMount(){
        getCostume().then(response=>{this.setState({
            characters: response
        })})
    }
    render() {
        return (
            <section className="Shop">
                    <img src= { costumes } alt="Star War Costumes" width="100%"></img>
                    <div className = "costume">
                        {this.state.characters && 
                        this.state.characters.map((x, i)=>(
                            <div className="characters" key={i}>
                                {x.name}
                            </div>
                        ))}
                    </div>
            </section>
        )
    }
}