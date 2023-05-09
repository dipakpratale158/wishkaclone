import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// import reducer function
import ProductReducer from "./Products/product.Reducer.js";

import UserReducer from "./user/user.reducer.js";
//combine reducer take object
const rootReducer = combineReducers({
  ProductsManager: ProductReducer,
  UserManager: UserReducer,
});

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  comp(applyMiddleware(thunk))
);


//go to index.js add provider   link react and redux