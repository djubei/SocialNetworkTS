import React from "react";
import {MyPosts} from "../../MyPosts/my-posts-ui/MyPosts";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";
import {PostsPropsType} from "../../../redux/state";

type ProfilePropsType = {
    state: {
        posts: PostsPropsType[]
    }
}
export const Profile = (props: ProfilePropsType) => {
console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}
