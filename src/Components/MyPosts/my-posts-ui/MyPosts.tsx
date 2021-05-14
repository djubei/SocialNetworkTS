import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/post-ui/Post";
import {PostsPropsType} from "../../../index";


type MyPostsPropsType = {
    posts: Array<PostsPropsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div className={s.item}>
            <textarea className={s.txt}></textarea>
            <button className={s.btn}> Add Post</button>

            {props.posts.map(t => <Post likes={t.likes} id={t.id} message={t.message}/>)}
        </div>
    )
}