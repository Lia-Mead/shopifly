// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { useState } from "react";

import BasicDatePicker from "./DatePicker";

import RangeSlider from "./Slider";
import SearchCountry from "./SearchCountry";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function Home(props) {
    const [selectedDate, handleDateChange] = useState(new Date());
    console.log("props.value: ", props.value);
    // useEffect(() => {
    //     dispatch(showProducts());
    // }, []);
    const getTripInfo = () => {
        console.log("props.value: ", props.value);
        console.log("props.value: ", selectedDate);
    };

    return (
        <div className="home">
            <h1>Home component</h1>
            <section className="search-bar">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <BasicDatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </MuiPickersUtilsProvider>

                <RangeSlider value={props.value} />

                <SearchCountry />
                <button onClick={() => getTripInfo()}>Search</button>
            </section>
        </div>
    );
}
