import React from "react";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";
import {MyPostsContainer} from "../../MyPosts/my-posts-ui/MyPostsContainer";
import {Store} from "redux";

type ProfilePropsType = {
    store:Store
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
