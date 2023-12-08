import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss";
import BasketCard from "../BasketCard";
function Basket() {
  const { basket } = useContext(BasketContext);
  return (
    <>
      <div id="cards_container">
        <div className="cards">
          {basket.length ? (
            basket.map((item) => (
              <BasketCard
                key={item.id}
                img={item.image}
                name={item.title}
                price={item.price}
                count={item.count}
              />
            ))
          ) : (
            <h1>Basket is empty..</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Basket;
