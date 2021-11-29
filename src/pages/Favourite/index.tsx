import React from "react";
import {FavouriteGallery} from "../../components/Favourite";
import {BaseLayout} from "../../components/BaseLayout";
import {Button} from "../../components/ui/Button";
import { Switcher } from "../../components/Switcher";


export const FavouritePage = () => {
    return (
        <>
            <BaseLayout title='Коллекция' />
            <div className='container'>
                <Switcher leftTitle='Буду смотреть' rightTitle='Просмотрено'/>
                <Button onClick={() => {}} title='' />
                <FavouriteGallery />
            </div>
        </>
    )
}
