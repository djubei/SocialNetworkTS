import {ActionType, DialogsPageType} from "../../../redux/store";


const initialState: DialogsPageType = {
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'bye'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'how are u'},
        {id: 5, message: 'ok'}
    ],
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Ignat'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Eugene'},
    ],
    newMessageText: 'ok'
}

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            return {
                ...state, messages: [...state.messages, {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: state.newMessageText
                }], newMessageText: ''
            }

        case 'ON-CHANGE-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessageText}
        default:
            return state
    }
}