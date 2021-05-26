import {ActionType, ProfilePageType} from "../../../redux/store";


const initialState: ProfilePageType =
    {
        posts: [
            {id: 1, message: 'hi', likes: 12},
            {id: 2, message: 'lalala', likes: 13},
            {id: 3, message: 'tralala', likes: 14},
            {id: 4, message: 'bombom', likes: 17},
            {id: 5, message: 'france', likes: 999},
        ],
        newPostText: 'it-kamasutra.com'
    }


export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let stateCopy = state.posts = [...state.posts, {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.postText,
                likes: 1
            }]
            state.newPostText = ''
            return {...state,posts:stateCopy}
        case 'CHANGE-POST-TEXT':
            return {...state, newPostText: action.postText}
        default:
            return {...state}
    }
}