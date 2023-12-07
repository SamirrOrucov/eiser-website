import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
function Cards() {

  const [product, setProduct] = useState([]);
  async function getFetch() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProduct(data);
    console.log(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div id="cards_container">
      <div className="container">
        <div className="text">
          <h5>INSPIRED PRODUCTS</h5>
          <p>Bring called seed first of third give itself now ment</p>
        </div>
        <div className="cards">
          {product.map((item) => (
            <Card
              key={item.id}
              img={item.image}
              name={item.title}
              price={item.price}
              x={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
