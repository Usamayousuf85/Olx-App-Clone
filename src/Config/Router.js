import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Container/Home/Home'
import Login from '../Container/Login/Login'
import Signup from '../Container/Signup/Signup';
import Sell from '../Container/Sell/Sell'
import Post from '../Container/Posts/Post'

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Signup" component={Signup} />
                <Route path="/Sell" component={Sell} />
                <Route path="/Post" component={Post} />
            </Router>
        </div>
    )
}

export default AppRouter