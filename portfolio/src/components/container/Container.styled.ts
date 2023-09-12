import { styled } from "@mui/material";

export const ContainerWrapper = styled("main")(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    margin: theme.spacing(8),
}));