import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ListEmployeeComponent from './components/ListEmployeeComponent'

function App() {
  return (
    <div className='container'>
        <Router>
            <Switch>
                <Route to="/" component={ListEmployeeComponent} ></Route>
            </Switch>
        </Router>
    </div>
  )
}

export default App