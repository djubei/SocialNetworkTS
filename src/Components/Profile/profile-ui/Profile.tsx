import React from "react";
import {MyPosts} from "../../MyPosts/my-posts-ui/MyPosts";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";
import {PostsPropsType} from "../../../redux/state";

type ProfilePropsType = {
    profilePage: {
        posts: PostsPropsType[]
        newPostText:string
    }
    addPost:(postText:any)=>void
    changePostText:(postText:string)=>void
}
export const Profile = (props: ProfilePropsType) => {
console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} changePostText={props.changePostText} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}/>
        </div>
    )
}
