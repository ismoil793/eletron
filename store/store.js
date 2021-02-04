import{createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root";
import { createWrapper } from 'next-redux-wrapper'


// store plugin to check requests to server and store
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const initialState = {};

const initStore = () => {
   return createStore(rootReducer, initialState, enhancer);
};

export const wrapper = createWrapper(initStore);