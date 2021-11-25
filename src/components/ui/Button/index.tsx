import {IButton} from "./index.interfaces";
import styles from './index.module.sass';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Button = (props: IButton) => {
    return (
        <button
            onClick={props.onClick}
            className={cx({
                submitButton: true,
                blueText: true
            })}
        >
            {props.title}
        </button>
    )
}
