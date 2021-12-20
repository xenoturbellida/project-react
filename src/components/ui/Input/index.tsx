import React from "react";
import {IInput} from "./index.interfaces";
import styles from './index.module.sass';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

export const Input = (props: IInput) => {
    const {name, type = 'text', placeholder = '', value, onChange, error = false} = props;
    return (
        <input
            name={name}
            className={cx({
                input: true,
                error: error
            })}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}
