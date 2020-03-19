import {applyMiddleware,compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import AllReducer from './reducer/rootreducer';
import {StudentInterface} from "./reducer/student";
import {LoginInterface} from "./reducer/login";

// const composeEnhance = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = applyMiddleware(thunk)

export type AppState = ReturnType<typeof AllReducer>;

export default createStore( AllReducer,enhancer);