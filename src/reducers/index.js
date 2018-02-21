import { combineReducers } from 'redux';
import { reducer as formReducer, routerStateReducer } from 'redux-form';
import PostsReducer from './reducer_post';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  router: routerStateReducer
});

export default rootReducer;
