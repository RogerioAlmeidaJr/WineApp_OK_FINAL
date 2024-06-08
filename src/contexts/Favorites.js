import {createContext, useState, useContext} from 'react';

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({children}){
  const [favorite, setFavorite] = useState([])

  return(
    <FavoritesContext.Provider
      value = {{favorite, setFavorite}}
    >
      {children}
    </FavoritesContext.Provider>
  );
}


export function useFavoriteContext(){
  const {favorite, setFavorite} = useContext(FavoritesContext)

  function addFavorite(newFavorite){

    let newList = [...favorite]

    newList.push(newFavorite)
    return setFavorite(newList)
  }

  return {
    favorite,
    addFavorite
  }
}