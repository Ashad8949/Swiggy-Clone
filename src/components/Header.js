import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
