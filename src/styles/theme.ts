import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography:{
        allVariants:{
            fontFamily:"Poppins",
        },
    },

    palette : {
        primary : {
            main: "rgb(21, 8, 38)",
            light: "rgb(155, 120, 209)",
            dark: "rgb(66, 0, 167)",
        },
        secondary : {
            main: "rgb(16, 5, 30)",
            dark: "rgb(155, 162, 209)",
            light: "rgb(150, 48, 201)",
        },
    },
});


