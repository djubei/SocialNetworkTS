import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/post-ui/Post";
import {PostsPropsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsPropsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div className={s.item}>
            <textarea className={s.txt}></textarea>
            <button className={s.btn}> Add Post</button>

            {props.posts.map(t => <Post key={t.id} likes={t.likes} id={t.id} message={t.message}/>)}
        </div>
    )
}