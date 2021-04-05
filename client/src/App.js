import Shop from "./Shop";
import Item from "./Item";
import Header from "./Header";

import { BrowserRouter, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
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
