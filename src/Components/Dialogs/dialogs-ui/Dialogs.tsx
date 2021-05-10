import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'


export const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/1'}>Dimich</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/2'}>Sveta</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/3'}>Valera</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/4'}>Viktor</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/5'}>Ignat</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}><NavLink to={'/dialogs/6'}>Eugeny</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Bye</div>
                <div className={s.message}>Ok</div>
            </div>
        </div>
    )
}