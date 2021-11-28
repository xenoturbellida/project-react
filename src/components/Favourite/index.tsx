import {observer} from "mobx-react";
import {useStores} from "../../utils/store-utils";
import {Poster} from "./Poster";

interface IPoster {
    title: string;
    rating: string;
    posterImg: string;
}

export const FavouriteGallery = observer(() => {
    const {favouriteStore: {favourites}} = useStores();

    const createGallery = (favourites: IPoster[]) => {
        let gallery = [];
        for (let film of favourites) {
            gallery.push(
                <li key={film.title}>
                    <Poster
                        image={film.posterImg}
                        title={film.title}
                        rating={film.rating}
                    />
                </li>);
        }
        return gallery;
    };

    return (
            <ul>{createGallery(favourites)}</ul>
    )
})
