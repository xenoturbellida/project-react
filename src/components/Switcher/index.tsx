import React from "react";


export const Switcher = (props: {leftTitle: string, rightTitle: string}) => {
    return (
        <div>
            <div>{props.leftTitle}</div>
            <div>{props.rightTitle}</div>
        </div>
    )
}