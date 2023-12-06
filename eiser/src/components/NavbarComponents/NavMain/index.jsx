import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const NavMain = () => {
  return (
    <>
      <div className="nav_main_container">
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
            <i class="fa-regular fa-magnifying-glass"></i>
            <i class="fa-sharp fa-regular fa-cart-shopping fa-flip-horizontal"></i>
            <i class="fa-sharp fa-regular fa-user-tie-hair"></i>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMain;
