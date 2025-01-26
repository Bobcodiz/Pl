import ActionTypes from "../constants/action-types.jsx";


const initialState = {
    products: [{
        id: 1,
        productName: "yoghurt",
        productDescription: " strawaberry youghurt manufuctured by delamare",
        productPrice: 120,
        productCategory: " strawaberry youghurt",
    },],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
};


