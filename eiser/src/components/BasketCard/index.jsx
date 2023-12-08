import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
function BasketCard({ img, name, price,count ,x}) {
  const { incCount,decCount,removeItem } = useContext(BasketContext);

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
            <b>${(price*count).toFixed(2)}</b>
          </p>{" "}
          <span
            style={{ fontWeight: "lighter", textDecoration: "line-through" }}
          >
            ${100*count}
          </span>
        </div>
        <div className="incDec">
            <button  onClick={()=>incCount(x)}>+</button>
            <p>count:{count}</p>
            <button onClick={()=>decCount(x)}>-</button>

        </div>
        <button onClick={()=>removeItem(x)}>remove item</button>
         
      </div>
    </div>
    </div>
  );
}

export default BasketCard;
