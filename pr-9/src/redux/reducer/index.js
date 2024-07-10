import NoteReducer from "./keepReducer";
import { combineReducers } from 'redux'
const RootReducer = combineReducers({
    note : NoteReducer
})
export default RootReducer;