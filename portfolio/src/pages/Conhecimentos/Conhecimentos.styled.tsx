import { styled, Stack } from "@mui/material";

export const ConhecimentosWrapper = styled(Stack)(({ theme }) =>({
    width: '100%',
    gap: theme.spacing(8),



    ".text__content":{
        width: '100%',
        color: theme.palette.secondary.dark,
        maxWidth: 500,


        h1:{
            fontWeight: 700,
            fontSize:26,
        },

        span:{
            color: theme.palette.primary.light,
            fontSize: 26,

            "&:hover":{
                color: theme.palette.secondary.light,
            },
        },
    },
}));