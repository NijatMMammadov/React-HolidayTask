import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export let productContext = createContext()

function ProductProvider({ children }) {
    let [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/flowers")
            .then(res => setProducts(res.data))
    }, [])

    const value = {
        products,
        setProducts
    }

    return <productContext.Provider value={value}> {children} </productContext.Provider>
}

export default ProductProvider
