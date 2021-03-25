import axios from "./Axios";

export async function showProducts() {
    const { data } = await axios.get("/homepage");
    console.log("data.products: ", data.products);
    return {
        type: "RECEIVE_PRODUCTS",
        products: data.products,
    };
}

export async function showItem(id) {
    const { data } = await axios.get(`/item/${id}`);
    console.log("data.item: ", data.item);
    console.log("id: ", id);
    return {
        type: "SHOW_ITEM",
        item: data.item,
    };
}

export async function sellProduct(id) {
    const { data } = await axios.post(`/sell-product/${id}`);
    console.log("data.sold: ", data.sold);
    return {
        type: "SELL_PRODUCT",
        item: data.sold,
        idProduct: id,
    };
}
