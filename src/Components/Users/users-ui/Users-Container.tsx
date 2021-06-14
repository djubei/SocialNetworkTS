import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../users-bll/users-reducer";
import {Dispatch} from "redux";
import {StoreStateType} from "../../../redux/store";


type MapStateToPropsType = {
    users: UserType[]
}

const MapStateToProps = (state: StoreStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void,
    follow: (id: number) => void,
    unfollow: (id: number) => void
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id))
    }
}


export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, StoreStateType>(MapStateToProps, MapDispatchToProps)(Users)

