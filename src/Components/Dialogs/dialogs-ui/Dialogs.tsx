import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "../../DialogItem/dialogItem-ui/DialogItem";
import {Message} from "../../Message/message-ui/Message";
import {
    ActionType,
    addNewMessageAC,
    DialogItemPropsType,
    MessagePropsType,
    onChangeMessageTextAc
} from "../../../redux/state";
import {store} from "../../../redux/state";


type DialogsPropsType = {
    state: {
        dialogs: Array<DialogItemPropsType>
        messages: Array<MessagePropsType>
        newMessageText: string
    }
    dispatch: (action: ActionType) => void

}


export const Dialogs = (props: DialogsPropsType) => {

    const dispatch = (action: ActionType) => {
        props.dispatch(action)
    }

    let getElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        dispatch(addNewMessageAC())
    }
    let onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(onChangeMessageTextAc(e.currentTarget.value))
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