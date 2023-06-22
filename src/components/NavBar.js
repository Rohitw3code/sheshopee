import React from 'react';
import './NavBar.css'

const NavigationBar = () => {
  return (
    <nav>
        <img src='logo'/>
        <a href='/'>Home</a>
        <a href='/'>products</a>
        <a href='/'>categories</a>
        <a href='/'>Blogs</a>
        <a href='/'>Contacts</a>
    </nav>
  );
};

export default NavigationBar;
