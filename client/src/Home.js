// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// import CustomElements from "./DatePicker";

import RangeSlider from "./Slider";

export default function Home() {
    // useEffect(() => {
    //     dispatch(showProducts());
    // }, []);

    return (
        <div className="home">
            <h1>Home component</h1>
            <section className="search-bar">
                <p>When do you want to go?</p>
                {/* <CustomElements /> */}

                <p>What's your budget</p>
                <RangeSlider />
                <p>Where do you want to go?</p>
            </section>
        </div>
    );
}
