import { styled } from "@mui/material";

export const ContainerWrapper = styled("main")(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(8),
    animation: 'moveIn .4s ease',



    [theme.breakpoints.down("lg")]:{
        margin: theme.spacing(2,2,10,0),
        padding: theme.spacing(5),

    },



    "@keyframes moveIn":{
        "from":{
            opacity: 0,
            transform: 'translateY(20px)',
        },
        "to":{
            opacity:1,
            transform:'translateY(0px)'
        },
    },

}));