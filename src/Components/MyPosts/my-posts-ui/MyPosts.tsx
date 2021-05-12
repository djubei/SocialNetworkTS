import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/post-ui/Post";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'hi',likes:12},
        {id: 2, message: 'lalala',likes:13},
        {id: 3, message: 'tralala',likes:14},
        {id: 4, message: 'pampampam',likes:15},
        {id: 5, message: 'parampampam',likes:16},
        {id: 6, message: 'bombom',likes:17},
        {id: 7, message: 'france',likes:999},
    ]

    console.dir(postsData.map(t=><Post likes={t.likes} id={t.id} message={t.message}/>))
    return (
        <div className={s.item}>
            <textarea className={s.txt}></textarea>
            <button className={s.btn}> Add Post</button>

            {postsData.map(t=><Post likes={t.likes} id={t.id} message={t.message}/>)}
        </div>
    )
}