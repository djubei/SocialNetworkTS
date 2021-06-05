import {ActionType} from "../../../redux/store";

export type LocationType = {
    country: string,
    city: string
}

export type UserType = {
    id: number
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersStateType = {
    users: Array<UserType>
}

const initialState: UsersStateType = {
    users: [
        /*{
            id: 1,
            photoUrl:"https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: false,
            fullName: 'Dimich',
            status: 'Im a boss',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            photoUrl:"https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: true,
            fullName: 'Andrew',
            status: 'Im a boss too',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3,
            photoUrl:"https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: true,
            fullName: 'Sasha',
            status: 'Im a boss free',
            location: {country: 'Ukraine', city: 'Kiev'}
        },*/
    ],
}


export let usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.id) {
                        return {...t, followed: true}
                    } else {
                        return {...t}
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(t => t.id === action.id ? {...t, followed: false} : {...t})
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}
export type FollowACType = ReturnType<typeof followAC>

export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id
    } as const
}
export type UnfollowACType = ReturnType<typeof unfollowAC>


export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export type SetUsersACType = ReturnType<typeof setUsersAC>