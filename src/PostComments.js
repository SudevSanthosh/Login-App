import React, { useState, useEffect } from 'react'
import Header from './Header'
import './styles/page1.css';

function PostComments(){
    const selectedUserPost=  JSON.parse( localStorage.getItem('userPost'))
    const [ response, setResponse ] = useState([])
    
    const fetchData = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then(data => {
            setResponse(data)
            })
        }

    useEffect(()=>{
        fetchData()
    },[])
    
    const selectedPost = response.filter((item)=> item.postId === selectedUserPost.id) 
    return(
        <div>
            <div>
                <Header />
                <br/><br/>
            </div>
            <div className="comments-container">
                <h2 className="main-headings">Comments !!</h2>
                {
                selectedPost.map((item)=>(
                    <div>
                        <ul>
                        <li>{item.body}</li>
                        </ul>
                    </div>
                ))
                }
            </div>
        </div>
        )
    }
export default PostComments
           