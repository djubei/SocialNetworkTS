import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {AppRootStateType, store,} from "./redux/reduxStore";

export let reRender = (state: AppRootStateType) => {
    ReactDOM.render(

        <BrowserRouter>
            <React.StrictMode>
                <App
                     store={store} state={state}
                />
            </React.StrictMode>
        </BrowserRouter>,

        document.getElementById('root')
    );
}
reRender(store.getState())

store.subscribe(()=>{
    reRender(store.getState())
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
