import React, { useRef } from "react";
import "./cssforcomponents/Header.css";
import Logo from "../assets/logo.png";
import { Link, Links } from "react-router-dom";


const Header = () => {
  return (
    <div className="navbar">
      <p><img className="logo" width={"50px"} height={"50px"} src={Logo} alt="" />Nikhil.</p>
      <ul className="nav-menu">
       <li> <Link className="links" to={'/'} >Home</Link></li>
       <li> <Link className="links" to={'/about'} >About</Link></li>
       <li> <Link className="links" to={'/projects'} >Projects</Link></li>
       <li> <Link className="links" to={'/contact'} >Contact</Link></li>
      </ul>
      <Link className="links" to={'/contact'} ><div className="nav-connect">Connect With Me</div></Link>
    </div>
  );
};

export default Header;
