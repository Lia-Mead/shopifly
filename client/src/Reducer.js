export default function (state = {}, action) {
    if (action.type == "RECEIVE_PRODUCTS") {
        state = {
            ...state,
            products: action.products,
        };
    }

    if (action.type == "SELL_PRODUCT") {
        state = {
            ...state,
            products: state.products.map((item) => {
                if (item.id === action.idProduct) {
                    return {
                        ...item,
                        availability: false,
                    };
                } else {
                    return item;
                }
            }),
        };
    }

    return state;
}
