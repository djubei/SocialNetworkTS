import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}><NavLink activeClassName={s.activeClassLink} to={'/profile'}>Profile</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeClassLink} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}><NavLink activeClassName={s.activeClassLink} to={'/news'}>News</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeClassLink} to={'/music'}>Music</NavLink></div>
            <div className={s.item}><NavLink activeClassName={s.activeClassLink} to={'/settings'}>Settings</NavLink>
            </div>
            <div className={s.item}><NavLink activeClassName={s.activeClassLink} to={'/users'}>Users</NavLink>
            </div>
        </div>
    )
}