import React from "react";
import s from './Post.module.css'


type PostsPropsType = {
    id: number
    message: string
    likes: number
}

export const Post = (props: PostsPropsType) => {


    return (
        <div>
            <div className={s.posts}>
                <div>
                    <img className={s.picture}
                         alt={'a'}
                         src={"https://i.pinimg.com/236x/c2/af/09/c2af0941a9eace5f0ba3dc63284d3860--mr-bean-funny-color-blue.jpg"}
                    />
                </div>
                <div>{props.message}</div>
                <button className={s.btn}>Remove</button>
                <div>Likes{props.likes}</div>
            </div>
        </div>
    )
}