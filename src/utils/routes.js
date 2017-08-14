import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../comps/Landing.js'
import Twitter from '../comps/Twitter.js'
import Shop from '../comps/Shop.js'
import Details from '../comps/Details.js'
import Cart from '../comps/Cart.js'
import Checkout from '../comps/Checkout.js'

export default (
    <Switch>
        <Route component = { Landing } path = "/" exact />
        <Route component = { Twitter } path = "/twitter" /> 
        <Route component = { Shop } path = "/shop" />
        <Route component = { Details } path = "/details" /> 
        <Route component = { Cart } path = "/cart" />
        <Route component = { Checkout } path = "/checkout"  />
    </Switch>
)