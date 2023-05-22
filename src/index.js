import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const defaultStats = {
    money:0,
    cursors:0,
    pervashs:0,
    lectures:0,

    bonus:0,
    cursorBonus:0,
    pervashsBonus:0,
    lecturesBonus:0,
}
const reducer = (state = defaultStats, action) =>{
    switch (action.type){
        case "ADD_MONEY":
            return {...state,money: state.money + action.payload};
        case "REMOVE_MONEY":
            return {...state,money: state.money - action.payload};
        case "ADD_CURSORS":
            return {...state,cursors: action.payload};
        case "ADD_PERVASHS":
            return {...state,pervashs: action.payload};
        case "ADD_LECTURES":
            return {...state,lectures: action.payload};
        case "ADD_BONUS_CURSORS":
            return {...state,cursorBonus: action.payload};
        default:
            return state;
    }
}
const store = createStore(reducer)
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
