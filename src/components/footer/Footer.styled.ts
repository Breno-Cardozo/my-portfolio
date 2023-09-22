import{ styled } from "@mui/material";


export const FooterWrapper = styled ('footer')(({theme}) => ({
    display: 'flex',
    color: theme.palette.secondary.dark,
    justifyContent: 'flex-end',
    bottom: 0,
    margin: theme.spacing(.2,5),
    
    p:{
        fontSize: 14,
        fontWeight: 500,

    },

    span:{
        color: theme.palette.primary.light,
        cursor: 'pointer',
        "&:hover": {
            color: theme.palette.secondary.light,
        },
    },


}));