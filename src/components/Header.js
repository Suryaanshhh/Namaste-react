import { Logo_Url } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  export default Header;