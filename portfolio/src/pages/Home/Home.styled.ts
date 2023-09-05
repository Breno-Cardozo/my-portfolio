import { styled, Stack } from "@mui/material";


export const HomeWrapper = styled(Stack)(({ theme }) => ({
    width: '100%',

    ".tittle":{
        color: theme.palette.secondary.dark, 
        fontWeight: 700, 
        fontSize:26,
    },

    ".hero__content":{
        width: '100%',
        maxWidth: 1140,
    },

    span: {
        color: theme.palette.primary.light,
        fontWeight: 700,
        fontSize:26,
    },
    
}));