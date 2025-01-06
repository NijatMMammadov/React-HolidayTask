import { useEffect } from "react";
import { createContext, useState } from "react";

export let favoritesContext=createContext()

function FavoritesProvider({children}){
    let localFavorite=JSON.parse(localStorage.getItem("favorites"))
    let [favorites,setFavorites]=useState(localFavorite ? localFavorite : [])

    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
    },[favorites])

    let value={
        favorites,
        setFavorites
    }

    return <favoritesContext.Provider value={value}>{children}</favoritesContext.Provider>
}

export default FavoritesProvider