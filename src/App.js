import React, { Component } from 'react';
import { connect } from 'react-redux'
import router from './utils/routes.js'

// import { add, remove } from './ducks/cart'

import Navbar from './comps/Navbar'

export default class App extends Component {
	render(){
		return (
			<div className='App'>
				<Navbar />
				{ router }
			</div>
		)
	}
}
