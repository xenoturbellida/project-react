import styles from './index.module.sass'

export const Poster = (props: {image: string, title: string, rating: string}) => {
    return (
        <div className={styles.poster}>
            <img src={require('./../../../' + props.image).default} alt={props.title} />
            <h2 className={styles.posterTitle}>{props.title}</h2>
            <div className={styles.posterRating__wrapper}>
                <div className={styles.posterRating}>
                    {props.rating}
                </div>
            </div>
        </div>
    )
}