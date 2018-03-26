import React from 'react'
import {Switch,Route ,BrowserRouter as Router,} from 'react-router-dom'
import Home from '../containers/Home/Home'
import City from '../containers/City/'
import Search from '../containers/Search/'
import Detail from '../containers/Detail'
import Login from '../containers/Login/'
import User from '../containers/User/'

const RouterMap = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/city" component={City}/>
            <Route path="/search/:category/:keyword?" component={Search}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/login/:router?" component={Login}/>
            <Route path="/user" component={User}/>
        </Switch>
    </Router>

)

export default RouterMap