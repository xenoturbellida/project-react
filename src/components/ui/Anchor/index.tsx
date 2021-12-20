import {IAnchor} from "./index.interfaces";
import classNames from "classnames/bind";
import styles from './index.module.sass';

const cx = classNames.bind(styles);

export const Anchor = (props: IAnchor) => {
    const {href, title} = props;
    return (
        <a href={href} className={cx({
            anchor: true
        })}>
            {title}
        </a>
    )
}