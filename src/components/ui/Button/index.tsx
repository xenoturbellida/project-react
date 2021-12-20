import {IButton} from "./index.interfaces";
import styles from './index.module.sass';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Button = (props: IButton) => {
    const {title, onClick, mode = 'primary', disabled = false} = props;
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
            {title}
        </button>
    )
}
