import styles from './index.module.sass'
import {observer} from "mobx-react";
import {useStores} from "../../utils/store-utils";
import {useState} from "react";
import {IDetails} from "./index.interfaces";

export const Details = observer(() => {

    const {favouriteStore: {getSelectedFilm}} = useStores();

    const [film, setFilm] = useState(getSelectedFilm() as IDetails);

    const populateGenres = (genres: string[]) => {
        let genresList = [];
        for (let genre of genres) {
            genresList.push(
                <li>{genre}</li>
            )
        }
        return genresList
    }

    return (

        <>
            <div className={styles.detailsContents}>
                <h2>{film.title}</h2>
                <div>
                    <h3>{film.year}</h3>
                    <div className={'rating'}>{film.rating}</div>
                </div>
                <p className={styles.detailsSynopsis}>{film.synopsis}</p>
                <ul className={styles.detailsGenres}>
                    {populateGenres(film.genres)}
                </ul>
            </div>
        </>

    )
})