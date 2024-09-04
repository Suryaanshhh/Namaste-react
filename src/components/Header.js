import { Logo_Url } from "../utils/constants";
import { useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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