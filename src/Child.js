import Page from './Page'
import React from 'react'
import Posts from './Posts'
import {Link } from 'react-router-dom'
import './styles/App.css'
import { useHistory } from "react-router-dom";



const Child= () => {

   let history=useHistory();
    function handleSubmit() {

      //  event.preventDefault();
      console.log(userArray)
       history.push("/Posts")
                    
  }
    const userArray= JSON.parse(localStorage.getItem('myArray'));

    const id1 = localStorage.setItem('id', userArray.id);
    return (
            <div>
                
               <div className="log-out">
               <Link className="logout-button" to="./"> Log Out </Link>
               </div>
               <h1> Welcome, {userArray.name} !! </h1>
               <div className="user-details">
                   <h2>Your Details</h2>
                   <h3>Username : {userArray.username}</h3>
                   <h3>Mail ID : {userArray.email}</h3>
                   <h3>Ph No : {userArray.phone}</h3>
                   <h3>Website : {userArray.website}</h3>
                   <h3>Company : {userArray.company.name}, {userArray.company.catchPhrase}</h3>
                   <h3>Address : {userArray.address.street}, {userArray.address.city}, 
                                {userArray.address.suite}, {userArray.address.zipcode} </h3>
                                <h1> {id1} </h1>
                             
                    <form onSubmit={handleSubmit}> 
                    <button type="submit" >
                    View Posts
                    </button>
                    </form>
                </div>
                </div>
            
        
    )
}

export default Child


