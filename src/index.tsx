import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";


export type MessagePropsType = {
    id: number
    message: string
}
let messageData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'bye'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'how are u'},
    {id: 5, message: 'ok'}
]


export type DialogItemPropsType = {
    id: number
    name: string
}
let dialogsData = [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Ignat'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Sasha'},
    {id: 7, name: 'Eugene'},
]


export type PostsPropsType = {
    id: number
    message: string
    likes: number
}
let postsData = [
    {id: 1, message: 'hi', likes: 12},
    {id: 2, message: 'lalala', likes: 13},
    {id: 3, message: 'tralala', likes: 14},
    {id: 4, message: 'pampampam', likes: 15},
    {id: 5, message: 'parampampam', likes: 16},
    {id: 6, message: 'bombom', likes: 17},
    {id: 7, message: 'france', likes: 999},
]

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App posts={postsData} messages={messageData} dialogs={dialogsData}/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
