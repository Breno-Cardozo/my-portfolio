import {styled} from "@mui/material";


export const HeaderWrapper = styled("header")(({theme}) => ({
    nav : {
        backgroundColor : theme.palette.primary.main,
        padding: theme.spacing(2,15),
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",

        [theme.breakpoints.down('lg')]:{
            alignItems: "center",
            display: "flex",
            justifyContent: 'center',
            gap: theme.spacing(10),
        },

        a:{
            textDecoration: 'none',
        },

        ".logo":{
            color: theme.palette.primary.light,
            fontSize: 45,
            fontWeight: 700,
            cursor: 'pointer',

            [theme.breakpoints.down('lg')]:{
                fontSize:50,
            }
        },

        ".btn":{
            color: theme.palette.secondary.dark,
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1,6),
            cursor: "pointer",
            borderRadius: 24,
            border: `3px solid ${theme.palette.primary.dark}`,
            textTransform: 'none',
            boxShadow: `0px 1px 3px 0px ${theme.palette.primary.dark}`,


            [theme.breakpoints.down('lg')]:{                
            },

            "&:hover": {
                color: theme.palette.secondary.dark,
                background: theme.palette.primary.dark,
            },
        },

        
    },
}));
