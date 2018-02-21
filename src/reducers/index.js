import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerStateReducer } from 'redux-router';
import PostsReducer from './reducer_post';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  router: routerStateReducer
});

export default rootReducer;
