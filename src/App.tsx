import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./Components/Header/header-ui/Header";
import {Navbar} from "./Components/Navbar/navbar-ui/Navbar";
import {Profile} from './Components/Profile/profile-ui/Profile';
import {Settings} from "./Components/Settings/settings-ui/Settings";
import {Music} from "./Components/Music/music-ui/Music";
import {News} from "./Components/News/news-ui/News";
import {Store} from 'redux';
import {DialogsContainer} from "./Components/Dialogs/dialogs-ui/DialogsContainer";
import {Users} from "./Components/Users/users-ui/Users";
import {UsersContainer} from "./Components/Users/users-ui/Users-Container";


type AppPropsType = {}

export const App = (props: AppPropsType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route /*exact*/ path={'/dialogs'}
                                 render={() => <DialogsContainer/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}