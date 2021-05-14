import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";
import {DialogItemPropsType, MessagePropsType} from "../../../index";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}


export const Dialogs = (props: DialogsPropsType) => {

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(t => <DialogItem id={t.id} name={t.name}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(t => <Message id={t.id} message={t.message}/>)}
            </div>
        </div>
    )
}