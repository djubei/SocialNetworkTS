import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";


export const Dialogs = () => {

    let messageData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'bye'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'how are u'},
        {id: 5, message: 'ok'}
    ]

    let dialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Ignat'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Eugene'},
    ]

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(t => <DialogItem id={t.id} name={t.name}/>)}
            </div>
            <div className={s.messages}>
                {messageData.map(t => <Message id={t.id} message={t.message}/>)}
            </div>
        </div>
    )
}