import React from "react";
import {UserType} from "../users-bll/users-reducer";
import axios from "axios";
import image from '../../../assets/images/1_6d98de9d.jpg';

type UsersPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void,
    follow: (id: number) => void
    unfollow: (id: number) => void
}


export const Users = (props: UsersPropsType) => {


    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            console.log(response.data.items)
            props.setUsers(response.data.items)
        })
    }


    return (
        <div>
            {props.users.map(t => <div key={t.id}>
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
    )
}

/*
if (props.users.length===0){
    props.setUsers([
        {
            id: 1,
            photoUrl: "https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: false,
            fullName: 'Dimich',
            status: 'Im a boss',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            photoUrl: "https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: true,
            fullName: 'Andrew',
            status: 'Im a boss too',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: 3,
            photoUrl: "https://cdnimg.rg.ru/i/gallery/d171bca4/1_6d98de9d.jpg",
            followed: true,
            fullName: 'Sasha',
            status: 'Im a boss free',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
    ],)
}*/
