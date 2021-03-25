export default function (state = {}, action) {
    if (action.type == "RECEIVE_PRODUCTS") {
        state = {
            ...state,
            products: action.products,
        };
    }
    return state;
}
