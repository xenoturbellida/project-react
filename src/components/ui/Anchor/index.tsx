import {IAnchor} from "./index.interfaces";
import classNames from "classnames/bind";
import styles from './index.module.sass';
import {FC} from "react";


const cx = classNames.bind(styles);

export const Anchor: FC<IAnchor> = ({href, children}) => {
    return (
        <a href={href} className={cx({
            anchor: true
        })}>
            {children}
        </a>
    )
}