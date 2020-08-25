// import RootReducer from "./reducers/RootReducer";
import reducer from "./reducers/reducer";
import initial from "./initial";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     reducer,
//     initial,
//     composeEnhancers(applyMiddleware(thunk), persistState()),
// );

const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;