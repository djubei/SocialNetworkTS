import React from "react";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";
import {MyPostsContainer} from "../../MyPosts/my-posts-ui/MyPostsContainer";

type ProfilePropsType = {

}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
