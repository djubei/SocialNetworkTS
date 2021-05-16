
let reRender=()=>{
}


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

export type StateType = {
    profilePage: {
        posts: Array<PostsPropsType>
        newPostText: string

    }
    dialogsPage: {
        messages: MessagePropsType[]
        dialogs: DialogItemPropsType[]
        newMessageText: string
    }
}

export let state: StateType = {

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
    }
}


export let addPost = (postText: any) => {

    state.profilePage.posts = [...state.profilePage.posts, {
        id: state.profilePage.posts[state.profilePage.posts.length - 1].id + 1,
        message: postText,
        likes: 0
    }]
    state.profilePage.newPostText = ''
    reRender()

}

export let changePostText = (postText: string) => {
    state.profilePage.newPostText = postText
    reRender()
    console.log(state.profilePage.newPostText)
}


export let addNewMessage = () => {
    state.dialogsPage.messages = [...state.dialogsPage.messages,
        {
            id: state.dialogsPage.messages[state.dialogsPage.messages.length - 1].id + 1,
            message: state.dialogsPage.newMessageText
        }]
    state.dialogsPage.newMessageText = ''
    reRender()

}

export let onChangeMessageText = (messageText: string) => {
    state.dialogsPage.newMessageText = messageText
    reRender()
}

export const subscribe=(observer:any)=>{
reRender=observer
}