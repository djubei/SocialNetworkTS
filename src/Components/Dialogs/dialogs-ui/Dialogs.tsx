import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";


export const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'Dimich'}/>
                <DialogItem id={2} name={'Sveta'}/>
                <DialogItem id={3} name={'Viktor'}/>
                <DialogItem id={4} name={'Ignat'}/>
                <DialogItem id={5} name={'Valera'}/>
                <DialogItem id={6} name={'Sasha'}/>
                <DialogItem id={7} name={'Eugene'}/>
            </div>
            <div className={s.messages}>
                <Message message={'hi'}/>
                <Message message={'bye'}/>
                <Message message={'ok'}/>
            </div>
        </div>
    )
}