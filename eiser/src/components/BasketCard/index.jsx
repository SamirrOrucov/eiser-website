import React, { useContext } from "react";
import "./index.scss";
function BasketCard({ img, name, price,count }) {
  return (
    <div id="card_container">
      <div className="container">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="product_info">
          <p className="name">{name}</p>
        <div className="pr">
        <p className="price">
            <b>${price}</b>
          </p>{" "}
          <span
            style={{ fontWeight: "lighter", textDecoration: "line-through" }}
          >
            $100.00
          </span>
        </div>
        <div className="incDec">
            <button>+</button>
            <p>count:{count}</p>
            <button>-</button>

        </div>
        <button>remove item</button>
         
      </div>
    </div>
    </div>
  );
}

export default BasketCard;
