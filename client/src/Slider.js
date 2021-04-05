import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    // console.log(value);
    return `${value}€`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([200, 800]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                What's your budget?
            </Typography>
            <Slider
                value={value}
                max={5000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
