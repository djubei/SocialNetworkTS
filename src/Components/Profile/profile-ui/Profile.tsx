import React from "react";
import {MyPosts} from "../../MyPosts/my-posts-ui/MyPosts";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";
import {ActionType, PostsPropsType} from "../../../redux/store";

type ProfilePropsType = {
    profilePage: {
        posts: PostsPropsType[]
        newPostText:string
    }
    dispatch: (action: ActionType) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  dispatch={props.dispatch} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}/>
        </div>
    )
}
