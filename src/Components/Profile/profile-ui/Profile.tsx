import React from "react";
import {MyPosts} from "../../MyPosts/my-posts-ui/MyPosts";
import {ProfileInfo} from "../../ProfileInfo/profileInfo-ui/ProfileInfo";

export const Profile = () => {
    return (
        <div>
           <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}