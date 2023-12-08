import React, { useEffect, useState } from "react";
import './index.scss'
function CardDetail({id}) {
  const [product, setProduct] = useState([]);
  async function getFetch() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <div id="detail_container">
        <div className="container">
          <div className="image">
            <img src={product.image} alt="" />
          </div>
          <div className="product_info">
            <p className="name"><b>Name: </b>{product.title}</p>
            <p className="name"><b>Description: </b>{product.description}</p>

            <div className="prDet">
              <p className="price">
                <b>Price: $ </b> { product.price}
              </p>{" "}
              <span
                style={{
                  fontWeight: "lighter",
                  textDecoration: "line-through",
                }}
              >
                $(100.00)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetail;
