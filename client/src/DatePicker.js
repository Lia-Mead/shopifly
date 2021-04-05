import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function BasicDatePicker(props) {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
            <DatePicker
                autoOk
                label="Choose a date"
                clearable
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
            />
        </Fragment>
    );
}

export default BasicDatePicker;
