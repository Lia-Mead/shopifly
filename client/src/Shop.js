import { showProducts, sellProduct, showItem } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function Shop() {
    const [popVisibible, setPopVisible] = useState(false);
    const dispatch = useDispatch();

    const products = useSelector(
        (state) => state.products && state.products.filter((item) => item.id)
    );

    // const togglePopup = () => {
    //     // console.log("i: ", id);

    //     // need to modify this function:
    //     //in this component create toggle for popup and keep only setpopupvisible
    //     // in item.js > move function including 2 dispatch

    //     setPopVisible(!popVisibible);
    // };

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
                            <Link
                                onClick={() => dispatch(showItem(item.id))}
                                to={`/show-product/${item.id}`}
                            >
                                <button disabled={item.availability == false}>
                                    {item.availability ? "BUY" : "SOLD OUT"}
                                </button>
                            </Link>
                        </div>
                    ))}
            </section>

            {/* <div className="pop-box">
                {popVisibible && <Item togglePopup={togglePopup} />}
            </div> */}
        </div>
    );
}
