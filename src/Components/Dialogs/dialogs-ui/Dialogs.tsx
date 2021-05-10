import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Dimich</div>
                <div className={`${s.dialog} ${s.active}`}>Sveta</div>
                <div className={`${s.dialog} ${s.active}`}>Valera</div>
                <div className={`${s.dialog} ${s.active}`}>Viktor</div>
                <div className={`${s.dialog} ${s.active}`}>Ignat</div>
                <div className={`${s.dialog} ${s.active}`}>Eugeny</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Bye</div>
                <div className={s.message}>Ok</div>
            </div>
        </div>
    )
}