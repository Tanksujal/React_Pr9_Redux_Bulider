import { createStore } from "redux";
import RootReducer from "./redux/reducer";

const store = createStore(RootReducer);
export default store;