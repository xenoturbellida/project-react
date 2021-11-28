import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../../utils/store-utils";
import image from "../../assets/favourites-images/minari.png";


export const FavouritePage = observer(() => {
    const {favouriteStore: {favourites}} = useStores();
    return (
        <>
            <img src={image} alt='minari' />
            <img src={require('../../assets/favourites-images/midsommar.png').default} alt='midsommar' />
            <h1>Коллекции</h1>

            {favourites.map(film => {
                console.log(typeof film.posterImg);
                // return(
                //         <li key={film.title}><img src={require('' + film.posterImg).default} alt={film.title}/></li>
                //     )

            })}
        </>
    )
})
