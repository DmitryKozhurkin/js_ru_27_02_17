import {combineReducers} from 'redux'
import filterReducer from './filters/index'
import articleReducer from './articles'
import counterReducer from './counter'


export default combineReducers({
    articles: articleReducer,
    filters: filterReducer,
    count: counterReducer
})