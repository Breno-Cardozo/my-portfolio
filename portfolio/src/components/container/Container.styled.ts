import { styled } from "@mui/material";

export const ContainerWrapper = styled("main")(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(3),
    width: '100%',
    alignItems: 'center',
    height: 'max-content',  

}));