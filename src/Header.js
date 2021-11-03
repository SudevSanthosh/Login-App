import React from 'react';
import './styles/page1.css';
import Page from './Page';
import Details from './Details';
import { BrowserRouter as Router , Link, Route ,Switch, Redirect, BrowserRouter} from 'react-router-dom'

function Header() {
    return (
  <div>
    <p className="header-title">Welcome!</p>
    </div>
    );
  }
  
  export default Header; 