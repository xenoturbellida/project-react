import FavouriteStore from "./favouriteStore";
import AuthStore from "./authStore";


class MainStore {
    favouriteStore: FavouriteStore;
    authStore: AuthStore;

    constructor() {
        this.favouriteStore = new FavouriteStore(this);
        this.authStore = new AuthStore(this);
    }
}

const mainStore = new MainStore();
export default mainStore;
export { MainStore };
