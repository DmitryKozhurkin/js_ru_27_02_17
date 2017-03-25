import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import idgen from '../middlewares/idgen'

const enhancer = applyMiddleware(idgen, logger)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store