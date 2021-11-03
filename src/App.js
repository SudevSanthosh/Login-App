import './styles/App.css'
import React, {Component} from "react"
import Page from './Page'
import Details from './Details'
import Posts from './Posts'
import { BrowserRouter as Router , Link, Route ,Switch, Redirect} from 'react-router-dom'
class App extends Component {
 constructor() {
        super()
        }
    render() {
      return (
        <Router>
             <Switch>
            <Route exact path='/' component={Page}></Route> 
            <Route exact path ='/Details' component={Details}></Route>
            <Route exact path ='/Posts' component={Posts}></Route>
            </Switch>
            </Router>
             );
    }
}
export default App;

