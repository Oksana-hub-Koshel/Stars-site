// import {createStore} from "redux";
// import reducer from "./reducers/reducers";

// const store= createStore(reducer)
// export default store

import {configureStore} from '@reduxjs/toolkit';
import bookSlice from "./bookSlice";
import shoppingSlice from "./shoppingSlice"


 const store = configureStore({
    reducer: {
        books: bookSlice,
        cart: shoppingSlice,
    },
});
export default store
