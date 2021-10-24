import './styles/App.css'
import React, {Component} from "react"
import Header from './Header'
class App extends Component {
 constructor() {
        super()
        this.state = {
          userId: "",
          passWord: "",
          character: {}
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
        const emailRegex = /\S+@\S+\.\S+/;
        
        if (this.state.userId=== '' || this.state.passWord==='' || emailRegex.test(this.state.userId)===false) 
        {
            alert( 'ERROR !! User Id or Password is Incorrect');
            
        }
        else{
        alert(this.state.userId + " " + this.state.passWord + " is submitted");
        }
        
      event.preventDefault();
     }
    componentDidMount()
     {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data
            })
        })
    }
   
 render() {
        return (
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
                      value="Sign in"
                      className="login-button"
                      > Sign in
                </button>
            </form>
            </div>
            <h1>{this.state.character.name} </h1>
            </div>
        )
    }
}
export default App;









