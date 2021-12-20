import { MainStore } from "./mainStore";
import {makeObservable, observable} from "mobx";

interface IPoster {
    title: string;
    rating: string;
    posterImg: string;
}

const favouritesMock: IPoster[] = [
    {
        title: 'Минари',
        rating: '6.9',
        posterImg: 'assets/favourites-images/minari.png'
    },
    {
        title: 'Манк',
        rating: '7.1',
        posterImg: 'assets/favourites-images/mank.png'
    },
    {
        title: 'Девушка, пода...',
        rating: '6.8',
        posterImg: 'assets/favourites-images/girl.png'
    },
    {
        title: 'Земля кочевников',
        rating: '7.3',
        posterImg: 'assets/favourites-images/nomadland.png'
    },
    {
        title: 'Отец',
        rating: '7.9',
        posterImg: 'assets/favourites-images/father.png'
    },
    {
        title: 'Ещё по одной',
        rating: '7.5',
        posterImg: 'assets/favourites-images/drunk.png'
    },
    {
        title: 'Душа',
        rating: '8.3',
        posterImg: 'assets/favourites-images/soul.png'
    },
    {
        title: 'Годзилла',
        rating: '6.1',
        posterImg: 'assets/favourites-images/godzilla.png'
    }
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