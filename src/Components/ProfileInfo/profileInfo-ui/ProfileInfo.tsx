import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <img
                className={s.picture}
                alt={'a'}
                src={'https://www.onetwotrip.com/ru/blog/wp-content/uploads/2017/03/pink-sand.jpg'}
            />
            <div className={s.description}>ava + description</div>
        </div>
    )
}