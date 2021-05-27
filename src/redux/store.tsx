import {dialogsPageReducer} from "../Components/Dialogs/dialogs-bll/dialogPageReducer";
import {profilePageReducer} from "../Components/Profile/profile-bll/profilePageReducer";
import {sideBarReducer} from "../Components/SideBar/sideBar-bll/sideBarReducer";

export type MessagePropsType = {
    id: number
    message: string
}


export type DialogItemPropsType = {
    id: number
    name: string
}


export type PostsPropsType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: PostsPropsType[]
    newPostText: string
}

export type StoreStateType={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: {}
}

export type DialogsPageType = {
    messages: MessagePropsType[]
    dialogs: DialogItemPropsType[]
    newMessageText: string
}

export type StoreType = {
    _state: StoreStateType
    getState: () => void
    _callSubscriber: () => void
    subscribe: (observer: any) => void
    dispatch:(action:ActionType)=>void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likes: 12},
                {id: 2, message: 'lalala', likes: 13},
                {id: 3, message: 'tralala', likes: 14},
                {id: 4, message: 'bombom', likes: 17},
                {id: 5, message: 'france', likes: 999},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('a')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    /*addPost(postText: any) {
        this._state.profilePage.posts = [...this._state.profilePage.posts, {
            id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
            message: postText,
            likes: 0
        }]
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },*/
    /*changePostText(postText: string) {
        this._state.profilePage.newPostText = postText
        this._callSubscriber()
        console.log(this._state.profilePage.newPostText)
    },*/
    /* addNewMessage() {
         this._state.dialogsPage.messages = [...this._state.dialogsPage.messages,
             {
                 id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
                 message: this._state.dialogsPage.newMessageText
             }]
         this._state.dialogsPage.newMessageText = ''
         this._callSubscriber()

     },*/
    /*  onChangeMessageText(messageText: string) {
          this._state.dialogsPage.newMessageText = messageText
          this._callSubscriber()
      },*/
    dispatch(action: ActionType) {


        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber()
        /*switch (action.type) {
            case 'ADD-NEW-MESSAGE':
                this._state.dialogsPage.messages = [...this._state.dialogsPage.messages,
                    {
                        id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
                        message: this._state.dialogsPage.newMessageText
                    }]
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber()
                break;
            case 'ON-CHANGE-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber()
                break;
            case 'ADD-POST':
                this._state.profilePage.posts = [...this._state.profilePage.posts, {
                    id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
                    message: action.postText,
                    likes: 0
                }]
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break;
            case 'CHANGE-POST-TEXT':
                this._state.profilePage.newPostText = action.postText
                this._callSubscriber()
                break;
        }*/
    }
}

export const addPostAC = (postText: any) => {
    return {
        type: 'ADD-POST',
        postText
    } as const
}
export const changePostTextAC = (postText: any) => {
    return {
        type: 'CHANGE-POST-TEXT',
        postText
    } as const
}
export const addNewMessageAC = () => {
    return {
        type: 'ADD-NEW-MESSAGE',
    } as const
}
export const onChangeMessageTextAc = (newMessageText: any) => ({
    type: 'ON-CHANGE-MESSAGE-TEXT',
    newMessageText
} as const)
export type addPostACType = ReturnType<typeof addPostAC>
export type changePostTextACType = ReturnType<typeof changePostTextAC>
export type addNewMessageACType = ReturnType<typeof addNewMessageAC>
export type onChangeMessageTextAcType = ReturnType<typeof onChangeMessageTextAc>


export type ActionType =
    | addPostACType
    | changePostTextACType
    | addNewMessageACType
    | onChangeMessageTextAcType


//@ts-ignore
window.store
    = store



