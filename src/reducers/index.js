import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_post';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducers
});

export default rootReducer;
