import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {addNewMessage, addPost, changePostText, onChangeMessageText} from "./redux/state";

export let reRender = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    onChangeMessageText={onChangeMessageText}
                    state={state}
                    addNewMessage={addNewMessage}
                    changePostText={changePostText}
                    addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
