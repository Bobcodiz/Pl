import {ActionTypes} from "../ActionTypes";

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectProduct = (product) => {
    return {
        type:ActionTypes.SELECT_PRODUCT,
        payload:product
    }
}

export const removeProduct = (product) => {
    return{
        type:ActionTypes.REMOVE_PRODUCT,
        payload:product
    }
}