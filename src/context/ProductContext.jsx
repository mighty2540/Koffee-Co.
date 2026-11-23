import { createContext, useState } from "react";
import { coffeeBeans } from "../data";

export const ProductContext = createContext();

export function ProductProvider  ({children}) {


    const [ products, setProducts] = useState(coffeeBeans);

    function addProduct(newProduct) {
        setProducts((previousProducts) => [...previousProducts, newProduct]);
    }

    function deleteProduct(productId){
        setProducts((previousProducts) =>
        previousProducts.filter(
            (product) => product.id !== productId
        ));
    }

    function editProduct(productId, updatedProduct) {
        setProducts((previousProducts) => previousProducts.map((product) =>
            product.id === productId ? { ...product,...updatedProduct }: product
         
        ));
    }

    return (
        <ProductContext.Provider 
        value={{
            products,
            addProduct,
            deleteProduct,
            editProduct
        
            }}
            >
            {children}
        </ProductContext.Provider>
    );
}