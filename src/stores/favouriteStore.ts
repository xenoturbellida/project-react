import { MainStore } from "./mainStore";
import {makeObservable, computed, observable, action} from "mobx";
import {IPoster} from "../components/Favourite/poster.interfaces";
import {favouritesMock} from "../mocks/favouritesMock";
import {IDetails} from "../components/Details/index.interfaces";
import {detailsMock} from "../mocks/detailsMock";

export default class FavouriteStore {
    favourites: IPoster[];
    selectedId: number;
    films__: IDetails[];

    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            selectedId: observable,
            getFavourites: computed,
            setSelectedId: action,
            getSelectedFilm: action
        })
        this.selectedId = 1;
        this.favourites = favouritesMock;
        this.films__ = detailsMock;
    }

    get getFavourites() {
        return this.favourites;
    }

    setSelectedId(id: number) {
        this.selectedId = id;
    }

    getSelectedFilm = () => {
        for (let film of this.films__ as IDetails[]) {
            if (film.id === this.selectedId) {
                return film
            }
        }
    }
}