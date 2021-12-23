import {Header} from "./Header";
import styles from './index.module.sass';
import {FC} from "react";


export const BaseLayout: FC<{title: string}> = (
    {title, children}) => {
    return (
        <>
            <Header />
            <h1 className={styles.pageTitle}>{title}</h1>
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
}