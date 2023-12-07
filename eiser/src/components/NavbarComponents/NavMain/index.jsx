import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const NavMain = () => {
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyNav(true) : setStickyNav(false);
    }
  };
  return (
    <>
      <div className={`nav_main_container  ${stickyNav ? "fixed" : ""}`}>
        <div className="container">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp"
              alt=""
            />
          </div>
          <div className="lists">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink className={"parent_shop"} to={"/shop"}>
              SHOP
              <div className="hidden_shop">
                <ul>
                  <Link>
                    <li>Shop Category</li>
                  </Link>
                  <Link>
                    <li>Product Details</li>
                  </Link>
                  <Link>
                    <li>Product Checkout</li>
                  </Link>
                  <Link>
                    <li>Shopping Cart</li>
                  </Link>
                </ul>
              </div>
            </NavLink>
            <NavLink className={"parent_shop"} to={"/blog"}>
              <div className="hidden_shop">
                <ul>
                  <Link>
                    <li>Shop Category</li>
                  </Link>
                  <Link>
                    <li>Product Details</li>
                  </Link>
                </ul>
              </div>
              BLOG
            </NavLink>
            <NavLink to={"/pages"} className={"parent_shop"}>PAGES
            <div className="hidden_shop">
                <ul>
                  <Link>
                    <li>Shop Category</li>
                  </Link>
                  <Link>
                    <li>Product Details</li>
                  </Link>
                </ul>
              </div>
            </NavLink>
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </div>
          <div className="icons">
            <i className="fa-regular fa-magnifying-glass"></i>
            <Link to={"/basket"} style={{color:"inherit"}}><i className="fa-sharp fa-regular fa-cart-shopping fa-flip-horizontal"></i><sup>0</sup></Link>
            <i className="fa-sharp fa-regular fa-user-tie-hair"></i>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMain;
