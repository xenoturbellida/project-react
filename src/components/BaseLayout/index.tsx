import {Header} from "./Header";
import styles from './index.module.sass';
import {FC} from "react";

interface IBaseLayout {
    pageName: 'favourite' | 'search' | 'details'| 'add',
    title: string
}

export const BaseLayout: FC<IBaseLayout> = (
    {pageName, title, children}) => {
    return (
        <>
            <Header pageName={pageName}/>
            <h1 className={styles.pageTitle}>{title}</h1>
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
}
