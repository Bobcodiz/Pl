import {combineReducers} from 'redux';
import {productReducer} from './productReducers.jsx'

const reducer = combineReducers({
    product: productReducer,
})

export default reducer;