import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/HomeView/HomeView'
import {DataView} from '../view/DataView/DataView'

export const Routes = (props) => {
    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path={'/HomeView'} component={HomeView}/>
                <Route exact path={'/DataView'} component={DataView}/>
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}

