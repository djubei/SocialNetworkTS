import React from "react";
import {MyPosts} from "../../MyPosts/my-posts-ui/MyPosts";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";
import {PostsPropsType} from "../../../index";

type ProfilePropsType = {
    posts: Array<PostsPropsType>
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}