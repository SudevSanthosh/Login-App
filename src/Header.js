import React from 'react';
import './styles/page1.css';
import { BrowserRouter as Router , Link, Route ,Switch, Redirect, BrowserRouter} from 'react-router-dom'

function Header() {
    return (
  <div>
    <p className="header-title">Welcome!</p>
    
      <p>
     <Link to="./Page">LOGIN </Link>
      </p>
     
    

  </div>
    );
  }
  
  export default Header; 