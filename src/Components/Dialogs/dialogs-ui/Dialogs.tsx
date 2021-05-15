import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";
import {DialogItemPropsType, MessagePropsType} from "../../../redux/state";


type DialogsPropsType = {
    state: {
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
    }
}


export const Dialogs = (props: DialogsPropsType) => {
    console.log(props)
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map(t => <DialogItem key={t.id} id={t.id} name={t.name}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(t => <Message key={t.id} id={t.id} message={t.message}/>)}
            </div>
        </div>
    )
}