import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface StoreContextType {
  food_list: FoodItem[];
  cartItems: { [key: string]: number };
  setCartItems: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getTotalCartAmount: () => number;
}

export const StoreContext = createContext<StoreContextType | null>(null)

const StoreContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});

    const addToCart = (itemId: string) => {
        setCartItems(prev => {
            const current = prev[itemId] || 0;
            return { ...prev, [itemId]: current + 1 };
        });
    }

    const removeFromCart = (itemId: string) => {
        setCartItems(prev => {
            const current = prev[itemId] || 0;
            const next = Math.max(0, current - 1);
            return { ...prev, [itemId]: next };
        });
    }

   const getTotalCartAmount = (): number => {
     let totalAmount = 0;
     for (const item in cartItems) {
        if (!Object.prototype.hasOwnProperty.call(cartItems, item)) continue;
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
            totalAmount += itemInfo.price * (cartItems[item] || 0);
        }
     }
     return totalAmount;
   }

    const contextValue: StoreContextType = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;