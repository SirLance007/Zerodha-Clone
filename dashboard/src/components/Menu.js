import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);
  const [isProfileDropDownMenu, setisProfileDropDownMenu] = useState(false);

  const handleClickMenu = (index) => {
    setselectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setisProfileDropDownMenu(!isProfileDropDownMenu);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration : "none"}} onClick={()=> handleClickMenu(0)} to={'/'}>
              <p className= {selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to={"/orders"} style={{textDecoration : "none"}} onClick={() => handleClickMenu(1)}>
              <p className= {selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to={"/holdings"} style={{textDecoration : "none"}} onClick={()=> handleClickMenu(2)}>
              <p className= {selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to={"/positions"} style={{textDecoration : "none"}} onClick={() => handleClickMenu(3)}>
              <p className= {selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to={"/funds"} style={{textDecoration : "none"}} onClick={ () => handleClickMenu}>
              <p className= {selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to={"/apps"} style={{textDecoration : "none"}} onClick={ ()=> handleClickMenu}>
              <p className= {selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
