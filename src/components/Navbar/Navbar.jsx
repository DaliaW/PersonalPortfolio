import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from '../Navbar/navbar.css';

const navbar = () => {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

 
  return (  
  <section id="navbar">



<div class="topnav" id="myTopnav">
  <a className="myA" href="#hero">
  <Link to="hero" smooth duration={1000}>
  
    <img src="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_D_blue-256.png" alt="logo" width="20" height="20"></img>
  
  </Link>
  </a>
      <a className="myA" href="#about">
    <Link to="about" smooth duration={1000}>About</Link>
      </a>
      <a className="myA" href="#projects">
    <Link to="projects" smooth duration={1000}> Projects</Link>
   </a>
    <a className="myA" href="#contact">
    <Link to="contact" smooth duration={1000}>Contact</Link>
    </a>

    

    </div>
    </section>
  );
};

export default navbar;
