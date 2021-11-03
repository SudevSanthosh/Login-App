import React, { Component } from 'react'
import './styles/App.css'
import {Link } from 'react-router-dom'
export default class Posts extends Component {
constructor() {
        super()
        this.state = {
        postArray: []
        }
    }
componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    postArray: data
                })

            })
}
    filterArray(id) {
    return this.state.postArray.filter((item) => item.userId === id)
    }
    render() {
         const userArray = JSON.parse(localStorage.getItem('myArray'));
        const filteredPosts = this.filterArray(userArray.id)
        return (
            <div>
                <div className="log-out">
               <Link className="logout-button" to="/"> Log Out </Link>
               </div>
             <h2>Hi {userArray.name}, Your Posts ||   User ID : {userArray.id} </h2>
             
            {
                filteredPosts.map((item)=>(
                <div className="post-list">
                <ul>
                <li> {item.title} </li>
                </ul>
                </div>
                ))
            }
          </div>
        )
    }
}
