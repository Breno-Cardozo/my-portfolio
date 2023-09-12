import { Stack, styled } from "@mui/material";


export const NavigationWrapper = styled(Stack)(({theme}) => ({
    width: '100%',
    position: 'fixed',
    justifyContent: "center",
    flexDirection: 'row',
    bottom: 10,

    ".navigation__content": {
        maxWidth: 220,
        width: '100%',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        background: theme.palette.secondary.main,
        border: '2px solid #4200A7',
        boxShadow: `0px 2px 4px 0px ${theme.palette.primary.dark}`,
        gap: theme.spacing(2),
        flexDirection: 'row',
    },

    ".icons":{
        border: '2px solid #4200A7',
        borderRadius: 100,
        color: theme.palette.secondary.dark,
        padding: theme.spacing(1),
        fontSize: 22,
        display: 'flex',

        "&:hover":{
            //color: theme.palette.secondary.light,
            background: theme.palette.primary.dark,
        },
    },
}));