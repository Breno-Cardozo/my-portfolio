import {styled} from "@mui/material";


export const HeaderWrapper = styled("header")(({theme}) => ({
    nav : {
        backgroundColor : theme.palette.primary.main,
        padding: theme.spacing(2,15),
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",

        ".logo":{
            color: theme.palette.primary.light,
            fontSize: 45,
            fontWeight: 700,
        },

        ".btn":{
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1,6),
            cursor: "pointer",
            borderRadius: 24,
            border: `3px solid ${theme.palette.primary.dark}`,
        },

        
    },
}));
