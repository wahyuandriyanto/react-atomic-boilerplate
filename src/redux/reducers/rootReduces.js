import { combineReducers } from 'redux';
import toDoList from './to-do-list/toDoList';

export default combineReducers({
    toDoList: toDoList
});
