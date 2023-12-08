import React, { createContext, useState } from "react";
import useLocal from "../hook/index";
export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocal("basket", []);
  
  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index == -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    basket[index].count++;
    setBasket(basket);
  }
  function incCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++;
    setBasket([...basket]);
  }
  function decCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }
  function removeItem(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }
  function totalPrice() {
    return basket.reduce((total, item) => item.price*item.count + total, 0)

  }

  return (
    <BasketContext.Provider
      value={{ basket, addBasket, incCount, decCount, removeItem,totalPrice  }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
