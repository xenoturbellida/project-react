import {IButton} from "./index.interfaces";
import styles from './index.module.sass';
import classNames from "classnames/bind";
import {FC} from "react";

const cx = classNames.bind(styles);

export const Button: FC<IButton> = (
    {onClick, mode = 'primary', disabled = false, children}) => {
    return (
        <button
            onClick={onClick}
            className={cx({
                button: true,
                primary: mode === 'primary',
                secondary: mode === 'secondary'
            })}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
