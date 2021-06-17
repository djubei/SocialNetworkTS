import React from "react";
import {
    addNewMessageAC,
    DialogItemPropsType,
    MessagePropsType,
    onChangeMessageTextAc,
    StoreStateType
} from "../../../redux/store";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


/*
type DialogsPropsType = {
    store: Store
}


export const DialogsContainer = (props: DialogsPropsType) => {

    let state: StoreStateType = props.store.getState()

    const dispatch = (action: ActionType) => {
        props.store.dispatch(action)
    }

    /!* const getElement = React.createRef<HTMLTextAreaElement>()*!/

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


}*/

type MapStateToPropsType = {
    messages: MessagePropsType[]
    dialogs: DialogItemPropsType[]
    newMessageText: string
}
type MapDispatchToPropsType = {
    onChangeMessage: (text: string) => void,
    addMessage: () => void
}

const MapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangeMessage: (text: string) => dispatch(onChangeMessageTextAc(text)),
        addMessage: () => dispatch(addNewMessageAC())
    }
}

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StoreStateType>(MapStateToProps, MapDispatchToProps)(Dialogs)