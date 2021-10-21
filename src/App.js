import './styles/App.css';

import React, {Component} from "react"
import Header from './Header'

class App extends Component {
    constructor() {
        super()
        this.state = {
          userId: "",
          passWord: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
      alert(this.state.userId + " " + this.state.passWord + " is submitted");
      event.preventDefault();
    }
    
    render() {
        return (
          
          <div>
            <Header />
           <div className="login-form-container">
            
            <form onSubmit={this.handleSubmit}>
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
                <input
                      type="submit"
                      value="Sign in"
                      className="login-button"
                />

              
                

            </form>
            
            </div>
            <h3>{this.state.userId} <br/>
            {this.state.passWord}</h3>
            </div>
        )
    }
}

export default App;










