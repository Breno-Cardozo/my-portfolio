import { styled } from "@mui/material";

export const ContainerWrapper = styled("main")(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: 'max-content',
    backgroundColor: theme.palette.primary.main,    

}));