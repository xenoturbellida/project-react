import {observer} from "mobx-react";
import {useStores} from "../../utils/store-utils";
import {Poster} from "./Poster";
import {IPoster} from "./poster.interfaces";
import {Anchor} from "../ui/Anchor";
import styles from './index.module.sass'

export const FavouriteGallery = observer(() => {
    const {favouriteStore: {getFavourites}} = useStores();

    const createGallery = (favourites: IPoster[]) => {
        let gallery = [];
        for (let film of favourites) {
            gallery.push(
                <li className={styles.galleryItem} key={film.id}>
                    <Anchor  href={'/'}>
                        <Poster
                            image={film.posterImg}
                            title={film.title}
                            rating={film.rating}
                        />
                    </Anchor>

                </li>);
        }
        return gallery;
    };

    return (
            <ul className={styles.gallery}>{createGallery(getFavourites)}</ul>
    )
})
