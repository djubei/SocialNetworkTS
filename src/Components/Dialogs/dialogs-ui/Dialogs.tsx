import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";
import {DialogItemPropsType, MessagePropsType} from "../../../redux/store";


type DialogsPropsType = {
    onChangeMessage: (text: string) => void
    addMessage: () => void
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    /*let getElement = React.createRef<HTMLTextAreaElement>()*/

    const addMessage = () => {
        props.addMessage()
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(t => <DialogItem key={t.id} id={t.id} name={t.name}/>)}
            </div>
            <div className={s.messages}>
                <div className={s.textarea}>
                    <textarea value={props.newMessageText} onChange={onChangeMessage}
                        /*ref={getElement}*//>
                    <button onClick={addMessage}>AddComment</button>
                </div>
                {props.messages.map(t => <Message key={t.id} id={t.id} message={t.message}/>)}
            </div>
        </div>
    )
}