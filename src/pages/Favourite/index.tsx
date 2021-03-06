import React from "react";
import {FavouriteGallery} from "../../components/Favourite";
import {BaseLayout} from "../../components/BaseLayout";
import styles from './index.module.sass'

export const FavouritePage = () => {
    return (
            <BaseLayout title='Коллекция' pageName='favourite'>
                <div className={styles.gallery__wrapper}>
                    <FavouriteGallery />
                </div>
            </BaseLayout>
    )
}
