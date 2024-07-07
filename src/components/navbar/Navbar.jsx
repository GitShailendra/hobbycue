import React from "react";
import "./navbar.css";
import { IoMdBookmark } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-logo">
            <span className="box"></span><h5>hobby</h5><span>cue</span>
            </div>
          <div className="search">
            <input type="text" placeholder="search here.." />
            <button className="searchbtn"><CiSearch />
            </button>
          </div>
          <div className="options">
          
          <select id="Explore" name="fruits">
            <option value="" className="hed"><br /><br />Explore</option>
            <option value="People - Community">Community</option>
            <option value="Places - Venues">Venues</option>
            <option value="Programs - Events">Events</option>
            <option value="Blogs">Blogs</option>
          </select>
          
          <select id="Explore" name="fruits">
            <option value="apple" className="hed">Hobbies</option>
            
          </select>
          </div>
          <div className="icons">
          <IoMdBookmark className="book" />
          <IoIosNotifications className="noti"/>
          <FaCartShopping className="cart" />

          </div>
          <div className="button">
            <button className="signin">Sign In</button>
          </div>
          <div className="nav__togle">
          <MdOutlineMenu />

          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
