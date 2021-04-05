import axios from "./Axios";
import Shop from "./Shop";
import Item from "./Item";

import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
    // useEffect(() => {
    //     axios
    //         .get("/homepage")
    //         .then((res) => {
    //             // console.log("res.data: ", res.data.products);
    //             // for (let i = 0; i < res.data.products.length; i++) {
    //             //     setProducts({
    //             //         id: res.data.products[i].id,
    //             //         name: res.data.products[i].name,
    //             //         img: res.data.products[i].img,
    //             //         description: res.data.products[i].description,
    //             //         createdAt: res.data.products[i].created_at,
    //             //     });
    //             //     console.log("products: ", products);
    //             // }
    //             setItemId(res.data.products.id);
    //             setItemName(res.data.products.name);
    //             setItemImg(res.data.products.img);
    //             setItemDescription(res.data.products.description);
    //             setItemCreated(res.data.products.created_at);
    //         })
    //         .catch((err) => {
    //             console.log("error in axios api/user: ", err);
    //         });
    // }, []);

    return (
        <BrowserRouter>
            <div className="app">
                <Route exact path="/" render={() => <Shop />} />
                <Route
                    path="/show-product/:id"
                    render={(props) => (
                        <Item
                            key={props.match.url}
                            match={props.match}
                            history={props.history}
                        />
                    )}
                />
            </div>
        </BrowserRouter>
    );
}
