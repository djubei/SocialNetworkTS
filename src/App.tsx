import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Components/Header/header-ui/Header";
import {Navbar} from "./Components/Navbar/navbar-ui/Navbar";
import {Profile} from './Components/Profile/profile-ui/Profile';
import {Messages} from "./Components/Messages/messages-ui/Messages";
import {Settings} from "./Components/Settings/settings-ui/Settings";
import {Music} from "./Components/Music/music-ui/Music";
import {News} from "./Components/News/news-ui/News";

export const App = () =>
    <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/messages'} render={() => <Messages/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/news'} render={() => <News/>}/>
        </div>
    </div>
