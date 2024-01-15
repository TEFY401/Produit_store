import { createContext, useState } from "react";
import datas from "../Components/Datas";

const ProductContext= createContext()


export const ProductProvider = ({children}) => {

    const [produit, setProduit] = useState(datas)
    const [produits, setProduits] = useState(datas)

    const print_content= (e) => {
        if(e.target.value.length >= 2)
          setProduits(produit.filter((data) => (data.make.toLowerCase().includes(e.target.value.toLowerCase()))))
        else{
          setProduits(produit)
        }
      }

    return <ProductContext.Provider value={{
        produit,
        produits,
        print_content
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductContext