export default function (state = {}, action) {
    if (action.type == "RECEIVE_PRODUCTS") {
        state = {
            ...state,
            products: action.products,
            availability: true,
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
            item: action.item,
            availability: false,
        };
    }

    if (action.type == "SHOW_ITEM") {
        state = {
            ...state,
            item: action.item,
        };
    }

    return state;
}
