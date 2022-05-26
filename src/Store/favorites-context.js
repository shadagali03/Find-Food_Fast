import {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favRest) {
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
