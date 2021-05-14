import React from "react";
import s from "../../Dialogs/dialogs-ui/Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={`${s.dialog}`}><NavLink activeClassName={`${s.active}`}
                                                to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    )
}
