import React from "react";
import {IInput} from "./index.interfaces";
import styles from './index.module.sass'

export const Input = (props: IInput) => {
    return (
        <input
            name={props.name}
            className={styles.inputField}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}
