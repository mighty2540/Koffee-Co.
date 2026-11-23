import { createContext, useState } from "react";
import { coffeeBeans } from "../data";

export const ProductContext = createContext();

export function ProductProvider  ({children}) {

    
    const [ products, setProducts] = useState(coffeeBeans);

    function addProduct(newProduct) {
        setProducts((previousProducts) => [...previousProducts, newProduct]);
    }

    return (
        <ProductContext.Provider value={{products, addProduct}}>
            {children}
        </ProductContext.Provider>
    );
}