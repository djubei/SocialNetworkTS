import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "../../MyPosts/my-posts-ui/MyPosts";

export const Profile = () => {
    return (
        <div>
            <img
                className={s.picture}
                alt={'a'}
                src={'https://www.onetwotrip.com/ru/blog/wp-content/uploads/2017/03/pink-sand.jpg'}
            />
            <MyPosts/>
        </div>
    )
}