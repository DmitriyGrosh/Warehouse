import {createStore} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'
import {newRootReducer} from "./reducers";

export const store = createStore(newRootReducer, composeWithDevTools());