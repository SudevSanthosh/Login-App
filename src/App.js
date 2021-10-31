import React from "react"
import Header from './Header'
import Page  from './Page'
import Child from "./Child"
import Posts from "./Posts"
import {Link, Route ,Switch,  BrowserRouter , Navigate} from 'react-router-dom'
 function App(){
return(
<BrowserRouter>

    <Switch>
        <Route exact path='/' component={Header} />
        <Route exact path='/Child' component={Child}/>
        <Route exact path='/Page' component={Page}/>
        <Route exact path='/Posts' component={Posts}/>


    </Switch>



</BrowserRouter>


)
 }
 export default App