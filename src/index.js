import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state';
import { addPost, subscribe, changeNewPostText, addLike } from './state'

const renderEntireTree = () => {
    ReactDOM.render(
      <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} addLike={addLike}/>,
    document.getElementById('root')
  );
};
renderEntireTree();
subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
