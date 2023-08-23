import {styled} from "@mui/material";


export const HeaderWrapper = styled("header")(({theme}) => ({
    nav : {
        backgroundColor : theme.palette.primary.main,
        padding: theme.spacing(2,15),
        ".logo":{
            color: theme.palette.primary.light,
            fontSize: 50,
            fontWeight: 700,
        },
    },
}));
