import './styles/App.css'
import React, { Component } from "react"
import Header from './Header'
class Page extends Component {


    constructor() {
        super()
        this.state = {
            userId: "",
            passWord: "",
            userLists: []
        }

    }

    onChangeUsername = (event) => {
        this.setState({ userId: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ passWord: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { userId, passWord, userLists } = this.state
        const { history } = this.props
        userLists.filter((useritem) => {

                if (userId === useritem.email && passWord === useritem.username) {
                  localStorage.setItem('myArray', JSON.stringify(useritem));
                  localStorage.setItem('myArray1', JSON.stringify(useritem));
                  
                   history.push('/Details')
                }
                
            }
        )
       
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {this.setState({
                    userLists: data })
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
                            onChange={this.onChangeUsername}
                        />
                        <br />
                        <input
                            type="password"
                            className="password-field"
                            value={this.state.passWord}
                            name="passWord"
                            placeholder="password"
                            onChange={this.onChangePassword}

                        />
                        <br />

                        <button
                            type="submit"
                            className="login-button" >
                            Sign in
                        </button>

                    </form>
                </div>
                </div>



        );
    }
}
export default Page;
