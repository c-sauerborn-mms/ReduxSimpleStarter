import { combineReducers } from 'redux';
import ActiveBookReducer from './reducer_active_book';
import BooklistReducer from './reducer_booklist';

const rootReducer = combineReducers({
   activeBook: ActiveBookReducer,
   bookList: BooklistReducer
});

export default rootReducer;
