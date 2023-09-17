import { styled } from "@mui/material";

export const ContainerWrapper = styled("main")(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(8),

    [theme.breakpoints.down("lg")]:{
        margin: theme.spacing(2,2,10,0),
        padding: theme.spacing(5),

    },

}));