import React, {Component} from 'react'
import './styles/App.css'
import {Link } from 'react-router-dom'
import Header from './Header'

class Posts extends Component {
constructor() {
        super()
        this.state = {
        postArray: []
        }
    }
componentDidMount(){
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
        const userArray = JSON.parse(localStorage.getItem('selectedUser'));
        const filteredPosts = this.filterArray(userArray.id)
        const handleClick =(post) => {
            localStorage.setItem("userPost", JSON.stringify(post))
            }

        return (
            <div>
                <Header/>
                    <br/><br/>
                    <div>
                        <h2 className="main-headings">Your Posts</h2>
                            {
                                filteredPosts.map((item)=>( 
                                    <Link to="/post-comments">
                                        <div onClick={()=> handleClick(item)} className="post-list">
                                            <ul>
                                                <li> {item.title} </li>
                                            </ul>
                                        </div>
                                    </Link>
                                    ))
                            }
                    </div>
            </div>
        )
    }
}
export default Posts