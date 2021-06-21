import React from "react";
import s from "./Users.module.css";
import {v1} from "uuid";
import image from "../../../assets/images/1_6d98de9d.jpg";
import {UserType} from "../users-bll/users-reducer";

type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    isFetching: boolean
}


export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages[i + 1] = i
    }
    return (
        <div>
            <div>
                <div >
                    {pages.map(t => < span  onClick={(event) => {
                        props.onPageChanged(t)
                    }}
                                           className={props.currentPage === t ? s.bold : ''}>{t}</span>)}
                </div>
                <div>
                    {props.users.map(t => <div key={v1()}>
                        <div>
                    <span>
                        <div>
                            <img style={{width: 115, height: 105}}
                                 src={t.photos.large != null ? t.photos.large : image}
                                 alt="zx"/>
                        </div>
                        <div>
                            {t.followed ? <button onClick={() => {
                                    props.unfollow(t.id)
                                }} style={{backgroundColor: 'red'}}>Unfollow</button> :
                                <button onClick={() => {
                                    props.follow(t.id)
                                }} style={{backgroundColor: "aquamarine"}}>follow</button>}
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{t.name}</div><div>{t.status}</div>
                        </span>
                        <span>
                            <div>{'t.location.city'}</div><div>{'t.location.country'}</div>
                        </span>
                    </span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}