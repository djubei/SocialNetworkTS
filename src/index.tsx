import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

export let reRender = (state:any) => {
    console.log(store.getState())
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    onChangeMessageText={store.onChangeMessageText.bind(store)}
                    state={store.getState()}
                    addNewMessage={store.addNewMessage.bind(store)}
                    changePostText={store.changePostText.bind(store)}
                    addPost={store.addPost.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
reRender(store.getState())
store.subscribe(reRender)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
