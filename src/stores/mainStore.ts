import FavouriteStore from "./favouriteStore";


class MainStore {
    favouriteStore: FavouriteStore;

    constructor() {
        this.favouriteStore = new FavouriteStore(this)
    }
}

const mainStore = new MainStore();
export default mainStore;
export { MainStore };
