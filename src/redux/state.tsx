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

    }
    dialogsPage: {
        messages: MessagePropsType[]
        dialogs: DialogItemPropsType[]
    }
}

export let state: StateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'hi', likes: 12},
            {id: 2, message: 'lalala', likes: 13},
            {id: 3, message: 'tralala', likes: 14},
            {id: 4, message: 'pampampam', likes: 15},
            {id: 5, message: 'parampampam', likes: 16},
            {id: 6, message: 'bombom', likes: 17},
            {id: 7, message: 'france', likes: 999},
        ],

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
        ]
    }
}