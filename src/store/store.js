import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import userReducer from './userReducer.js';

const reducer = combineReducers({
    user: userReducer
  });

  const store = () => {
    return createStore(reducer, composeWithDevTools(
      applyMiddleware(ReduxThunk)));
  };

  export default store();