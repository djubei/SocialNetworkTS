import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/post-ui/Post";

export const MyPosts = () => {
    return (
        <div className={s.item}>
            <textarea className={s.txt}></textarea>
            <button className={s.btn}> Add Post</button>
            <Post message={'hi'}/>
            <Post message={'its ok'}/>
        </div>
    )
}