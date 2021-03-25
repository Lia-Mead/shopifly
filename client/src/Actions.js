import axios from "./Axios";

export async function showProducts() {
    const { data } = await axios.get("/homepage");
    console.log("data.products: ", data.products);
    return {
        type: "RECEIVE_PRODUCTS",
        products: data.products,
    };
}
