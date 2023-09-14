import { styled, Stack } from "@mui/material";

export const ConhecimentosWrapper = styled(Stack)(({ theme }) =>({
    width: '100%',
    gap: theme.spacing(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',

    [theme.breakpoints.down("lg")]:{
        flexDirection:'column-reverse',
        alignItems: 'center',
    },



    ".text__content":{
        width: '100%',
        color: theme.palette.secondary.dark,
        maxWidth: 550,
        gap: theme.spacing(2),


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

        p: {
            fontWeight: 500,
        },
    },

    ".icons":{
        flexDirection: 'row',
        fontSize: 48,
        gap: theme.spacing(1),

        [theme.breakpoints.down("lg")]:{
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
        },

        svg: {
            "&:hover":{
            color: theme.palette.primary.light,
            },
        },
        
    },

    img:{
        maxWidth: 500,
        width: '100%',
        height: 'auto',
    },
}));