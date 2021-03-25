import { showProducts, sellProduct, showItem } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Item(props) {
    const dispatch = useDispatch();

    const item = useSelector((state) => state.item);
    console.log("item[0].availability: ", item);

    // useEffect(() => {
    //     dispatch(showItem());
    //     // dispatch(showProducts());
    // }, []);

    return (
        <div className="pop-up">
            {item && (
                <>
                    <p onClick={() => props.history.goBack()}>x</p>
                    <p>{item[0].name}</p>
                    <img
                        className="item-pic"
                        src={item[0].img}
                        alt={item[0].name}
                    />
                    <p>{item[0].description}</p>
                    <p>{item[0].price}</p>
                    <button
                        onClick={() => dispatch(sellProduct(item[0].id))}
                        disabled={item[0].availability == false}
                    >
                        {item[0].availability ? "BUY" : "SOLD OUT"}
                    </button>
                </>
            )}
        </div>
    );
}
