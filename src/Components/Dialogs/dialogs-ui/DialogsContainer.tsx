import React from "react";
import {ActionType, addNewMessageAC, onChangeMessageTextAc, StoreStateType} from "../../../redux/store";
import {Store} from "redux";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    store: Store
}


export const DialogsContainer = (props: DialogsPropsType) => {

    let state: StoreStateType = props.store.getState()

    const dispatch = (action: ActionType) => {
        props.store.dispatch(action)
    }

    /* const getElement = React.createRef<HTMLTextAreaElement>()*/

    const addMessage = () => {
        dispatch(addNewMessageAC())
    }

    const onChangeMessage = (text: string) => {
        dispatch(onChangeMessageTextAc(text))
    }

    return (
        <Dialogs
            onChangeMessage={onChangeMessage}
            addMessage={addMessage}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}/>
    )
}