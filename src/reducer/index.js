import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";
import NotesReducer from "./NotesReducer";

const rootReducer = combineReducers({
    todoReducer: todoReducer,
    NotesReducer: NotesReducer
})

export default rootReducer