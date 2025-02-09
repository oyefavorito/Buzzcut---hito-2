import React from "react";
import { useState, createContext, useEffect } from "react";

// Contexto
export const Context = createContext();

const AppContext = ({ children }) => {
  const [cardItems, setCardItems] = useState([]); // Productos
  const [cart, setCart] = useState([]); // Carrito

  // Obtener productos desde el JSON
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const res = await fetch("/json/productos.json");
        if (!res.ok) {
          throw new Error(`Error al obtener los datos: ${res.status}`);
        }
        const data = await res.json();
        setCardItems(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  // Funciones de carrito
  const monedaLocal = (valor) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const addCart = (producto) => {
    const foundIndex = cart.findIndex((item) => item.id === producto.id);

    if (foundIndex < 0) {
      producto.count = 1;
      setCart([...cart, producto]);
    } else {
      cart[foundIndex].count++;
      setCart([...cart]);
    }
  };

  const increaseCount = (index) => {
    cart[index].count++;
    setCart([...cart]);
  };

  const decreaseCount = (index) => {
    if (cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
    setCart([...cart]);
  };

  const totalCart = cart.reduce(
    (acumulador, { precio, count }) => acumulador + precio * count,
    0
  );

  return (
    <Context.Provider
      value={{
        cardItems,
        cart,
        setCart,
        addCart,
        increaseCount,
        decreaseCount,
        totalCart,
        monedaLocal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
