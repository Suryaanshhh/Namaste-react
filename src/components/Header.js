import { Logo_Url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const[btnName,setBtnName]=useState("login")
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={Logo_Url}
          ></img>
        </div>
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Cart</li>
            <li><button className="login-btn" onClick={()=>{
              if(btnName==="Logout") setBtnName("Login")
              else setBtnName("Logout")
            }}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;