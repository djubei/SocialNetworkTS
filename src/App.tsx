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
import {DialogItemPropsType, MessagePropsType, PostsPropsType} from "./index";


type AppPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    posts: Array<PostsPropsType>
}

export const App = (props: AppPropsType) =>
    <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
            <Route /*exact*/ path={'/dialogs'} render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/news'} render={() => <News/>}/>
        </div>
    </div>
