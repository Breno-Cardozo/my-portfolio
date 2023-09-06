import { styled } from "@mui/material";


export const FooterWrapper = styled("footer")(({theme}) => ({
    margin: theme.spacing(5,0),
    Stack:{
        alignItems:"center",
    },
    
    
    ".footer":{
        width: '20%',
        display: 'flex',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        height: 60,
        background: theme.palette.secondary.main,
        border: '2px solid #4200A7',
        boxShadow: `0px 2px 4px 0px ${theme.palette.primary.dark}`,
    },

    ".icons":{
        border: '2px solid #4200A7',
        borderRadius: 100,
        color: theme.palette.secondary.dark,
        padding: theme.spacing(1),
        fontSize: 22,
        display: 'flex',

        "&:hover":{
            //color: theme.palette.secondary.light,
            background: theme.palette.primary.dark,
        },
    },
}));