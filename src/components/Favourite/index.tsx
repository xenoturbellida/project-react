import {observer} from "mobx-react";
import {useStores} from "../../utils/store-utils";
import {Poster} from "./Poster";
import {IPoster} from "./poster.interfaces";
import styles from './index.module.sass'

export const FavouriteGallery = observer(() => {
    const {favouriteStore: {getFavourites, setSelectedId}} = useStores();

    const handle = (id: number) => {

        setSelectedId(id);
    }

    const createGallery = (favourites: IPoster[]) => {
        let gallery = [];
        for (let film of favourites) {
            gallery.push(
                <li className={styles.galleryItem} key={film.id}>
                    <a href={'/details'} onClick={() => handle(film.id)}>
                        <Poster
                            image={film.posterImg}
                            title={film.title}
                            rating={film.rating}
                        />
                    </a>
                </li>);
        }
        return gallery;
    };

    return (
            <ul className={styles.gallery}>{createGallery(getFavourites)}</ul>
    )
})
