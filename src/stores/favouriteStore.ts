import { MainStore } from "./mainStore";
import {makeObservable, observable} from "mobx";

interface IPoster {
    title: string;
    rating: string;
    posterImg: string;
}

const favouritesMock = [
    {

        title: 'Минари',
        rating: '6.9',
        posterImg: '../../assets/favourites-images/midsommar.png'
    },
    {
        title: 'Солнцестояние',
        rating: '6.6',
        posterImg: '../../assets/favourites-images/midsommar.png'
    },
]

export default class FavouriteStore {
    favourites: IPoster[];

    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            favourites: observable
        })

        this.favourites = favouritesMock;
    }

}