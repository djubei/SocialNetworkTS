import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Components/Header/header-ui/Header";
import {Navbar} from "./Components/Navbar/navbar-ui/Navbar";
import {Profile} from './Components/Profile/profile-ui/Profile';
import {Settings} from "./Components/Settings/settings-ui/Settings";
import {Music} from "./Components/Music/music-ui/Music";
import {News} from "./Components/News/news-ui/News";
import {Dialogs} from "./Components/Dialogs/dialogs-ui/Dialogs";
import {ActionType, DialogItemPropsType, MessagePropsType, PostsPropsType} from "./redux/store";


type AppPropsType = {
    state: {
        profilePage: {
            posts: Array<PostsPropsType>
            newPostText: string

        }
        dialogsPage: {
            messages: MessagePropsType[]
            dialogs: DialogItemPropsType[]
            newMessageText: string
        }
    }
    dispatch: (action: ActionType) => void
}

export const App = (props: AppPropsType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/>
                <Route /*exact*/ path={'/dialogs'}
                                 render={() => <Dialogs dispatch={props.dispatch} state={props.state.dialogsPage}/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
            </div>
        </div>
    )
}