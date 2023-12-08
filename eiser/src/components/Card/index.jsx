import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
function Card({ img, name, price, count,x }) {
  
  const { addBasket,incCount,decCount} = useContext(BasketContext);
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
            $(100.00)
          </span>
        </div>
        {/* ${show?"hide":""} */}
          <div className={`hidden_links  `}>
            <div className="eye icn">
              <Link to={"/detail/"+x.id}>
                <i className="fa-regular fa-eye"></i>
              </Link>
            </div>
            <div className="heart icn">
              <Link to={"/wishlist"}>
                <i className="fa-regular fa-heart"></i>
              </Link>
            </div>
            <div className="cart icn" onClick={() => addBasket(x)}>
              <i className="fa-sharp fa-regular fa-cart-shopping fa-flip-horizontal"></i>
            </div>
          </div>
          {/* ${show?"show ":""} */}
          {/* <div className={`incDec  `}>
            <button  onClick={()=>incCount(x)}>+</button>
            <p>count:{count}</p>
            <button onClick={()=>decCount(x)}>-</button>

        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
