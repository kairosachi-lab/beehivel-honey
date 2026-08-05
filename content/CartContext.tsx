"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;

  increaseQuantity: (name: string) => void;

  decreaseQuantity: (name: string) => void;

  removeItem: (name: string) => void;

  isCartOpen: boolean;

  setIsCartOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  function addToCart(item: Omit<CartItem, "quantity">) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (product) => product.name === item.name
      );

      if (existingItem) {
        return currentCart.map((product) =>
          product.name === item.name
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  }

  function increaseQuantity(name: string) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(name: string) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(name: string) {
    setCart((currentCart) => currentCart.filter((item) => item.name !== name));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}