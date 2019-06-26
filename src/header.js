import React from 'react';
import './header.css';

const header = (props) => {
    return (
        <div className="Header">
        <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a onClick={props.click} href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
        </div>
    )
}
    

export default header;