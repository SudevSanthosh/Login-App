 import './styles/App.css'
import React, {Component} from "react"
import Header from './Header'
import Page from './Page'
import { BrowserRouter as Router , Link, Route ,Switch, Redirect} from 'react-router-dom'
class App extends Component {
 constructor() {
        super()
        this.state = {
          userId: "",
          passWord: "",
          userLists: []
         }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
         })
    }
    handleSubmit(event) {
        const emailRegex = /\S+@\S+\.\S+/;
        
        if (this.state.userId=== '' || this.state.passWord==='' || emailRegex.test(this.state.userId)===false) 
        {
            alert( 'ERROR !! User Id or Password is Incorrect');
            
        }
       
        if(this.state.userId in this.userLists)
        {
            alert("hello");
        }
        
        
        
      event.preventDefault();
     }
    componentDidMount()
     {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({
                userLists: data
            })
        })
    }
   
 render() {
     
        return (
        <Router>
          <div>
            <Header />
           <div className="login-form-container">
            
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text" 
                    className="username-field"
                    value={this.state.userId} 
                    name="userId" 
                    placeholder="user id" 
                    onChange={this.handleChange} 
                 />
                <br />
                <input
                    type="password" 
                    className="password-field"
                    value={this.state.passWord} 
                    name="passWord" 
                    placeholder="password" 
                    onChange={this.handleChange} 
                />
                <br />
                
                <button
                      type="submit"
                      className="login-button"
                      > Sign in
                </button>
               
            </form>
            
            
            </div>
            <h1>{this.state.userLists.name} </h1>
            
            <ul>
                <li>
                  <Link to='/Page'> NEXT PAGE </Link>
                </li>
            </ul>
            
            </div>
            <Switch>
            <Route path ='/Page' component={Page}></Route>
            </Switch>
            </Router>


        );
    }
}
export default App;
