import { showProducts } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Shop() {
    const [soldout, setSoldout] = useState(false);
    const dispatch = useDispatch();

    const products = useSelector(
        (state) => state.products && state.products.filter((item) => item.id)
    );

    const changeProductAvailability = (id) => {
        // console.log("e: ", e);
        console.log("i: ", id);

        setSoldout(id);
    };

    useEffect(() => {
        dispatch(showProducts());
    }, []);

    return (
        <div className="shop">
            <h1>Shop component</h1>
            <section className="products-con">
                {products &&
                    products.map((item) => (
                        <div className="product-box" key={item.id}>
                            <h3>{item.name}</h3>
                            <img className="product-img" src={item.img} />
                            <p>
                                Added on{" "}
                                {item.created_at
                                    .slice(0, 16)
                                    .replace("T", " at ")}
                            </p>
                            <p>{item.price} EUR</p>
                            <button
                                onClick={() =>
                                    changeProductAvailability(item.id)
                                }
                                disabled={soldout == item.id}
                            >
                                {soldout == item.id ? "SOLD OUT" : "BUY"}
                            </button>
                        </div>
                    ))}
            </section>

            <div className="product-box"></div>
        </div>
    );
}
