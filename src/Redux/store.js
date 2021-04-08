import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  postReducer,
  courseReducer,
  teacherReducer,
  claseReducer,
  specialityReducer
} from './reducers'

export default createStore(combineReducers({
    postReducer,
    courseReducer,
    teacherReducer,
    claseReducer,
    specialityReducer
  }), 
  composeWithDevTools(applyMiddleware(thunk))
  )
