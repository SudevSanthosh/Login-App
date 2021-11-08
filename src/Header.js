import React from 'react';
import './styles/page1.css';
import './styles/App.css'
import { useHistory } from "react-router-dom";

const Header= () => 
{
let history=useHistory();

function viewProfile(){
  history.push("/Details")
}

function signOut(){
  localStorage.removeItem('selectedUser')
  history.push("/")
}

function viewPosts() {
  history.push("/Posts")
}

const user= JSON.parse(localStorage.getItem('selectedUser'));   
return (
    <div className="header-components">
      <button 
          onClick={signOut} 
          className="signout-button"> 
          Log out 
      </button>
      <button 
        onClick={viewProfile}
        className = "viewprofile-button"> 
        {user.name}
      </button>
      <button 
        onClick={viewPosts} 
        className="viewposts-button"> 
        My Posts
      </button>
   </div>
     );
    }
export default Header; 
     
 
    
      
     
  
      
   
   
    
    
  
  