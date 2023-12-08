import React, { createContext, useState } from "react";
import useLocal from "../hook/index";
export const BasketContext = createContext();
function BasketProvider({ children }) {
  const [basket, setBasket] = useLocal("basket",[])
  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index == -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    basket[index].count++;
    setBasket(basket);
  }
  
  return (
    <BasketContext.Provider value={{ basket, addBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
