import { styled } from "@mui/material";


export const FooterWrapper = styled("footer")(({theme}) => ({
    margin: theme.spacing(5,0),
    Stack:{
        alignItems:"center",
    },


    ".footer":{
        width: '20%',
        border: '2px solid #4200A7',
        display: 'flex',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        height: 50,
        background: theme.palette.secondary.main,
        boxShadow: '0px 2px 4px 0px #4200A7',
    },
    ".icons":{
        border: '2px solid #4200A7',
        borderRadius: 100,
        color: theme.palette.secondary.dark,
        padding: theme.spacing(1),
        fontSize: '22px',
        display: 'flex',
    },
}));