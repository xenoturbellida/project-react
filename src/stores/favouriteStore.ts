import { MainStore } from "./mainStore";
import {makeObservable, computed} from "mobx";
import {IPoster} from "../components/Favourite/poster.interfaces";
import {favouritesMock} from "../mocks/favouritesMock";

export default class FavouriteStore {
    favourites: IPoster[];

    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            getFavourites: computed,
        })

        this.favourites = favouritesMock;
    }

    get getFavourites() {
        return this.favourites;
    }

}