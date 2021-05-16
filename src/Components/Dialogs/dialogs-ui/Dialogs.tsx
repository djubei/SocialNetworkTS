import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";
import {DialogItemPropsType, MessagePropsType} from "../../../redux/state";


type DialogsPropsType = {
    state: {
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageText:string
    }
    onChangeMessageText:(messageText:string)=>void
    addNewMessage:()=>void
}


export const Dialogs = (props: DialogsPropsType) => {

    console.log(props)
    let getElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        props.addNewMessage()
    }
    let onChangeMessage=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.onChangeMessageText(e.currentTarget.value)
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogs.map(t => <DialogItem key={t.id} id={t.id} name={t.name}/>)}
            </div>
            <div className={s.messages}>
                <div className={s.textarea}>
                    <textarea value={props.state.newMessageText} onChange={onChangeMessage} ref={getElement}></textarea>
                    <button onClick={addMessage}>AddComment</button>
                </div>
                {props.state.messages.map(t => <Message key={t.id} id={t.id} message={t.message}/>)}
            </div>
        </div>
    )
}