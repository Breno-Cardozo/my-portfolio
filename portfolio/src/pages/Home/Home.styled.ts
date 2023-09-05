import { styled, Stack } from "@mui/material";


export const HomeWrapper = styled(Stack)(({ theme }) => ({
    width: '100%',


    ".links":{
        flexDirection: 'row',
        gap: theme.spacing(4)
    },

    ".icons":{
        gap:theme.spacing(4),
        margin: theme.spacing(5,0),
        flexDirection: 'row',
    },

    ".icon": {
        border: '2px solid #4200A7',
        borderRadius: 100,
        color: theme.palette.secondary.dark,
        padding: theme.spacing(1),
        fontSize: '22px',
        display: 'flex',
    },


    ".tittle":{
        color: theme.palette.secondary.dark, 
        fontWeight: 700, 
        fontSize:26,
    },

    ".hero__content":{
        width: '40%',
        margin: theme.spacing(15,20),
        maxWidth: 1140,
    },

    ".cv": {
        color:theme.palette.secondary.dark,
        display:"flex",
        fontSize: 12,
        justifyContent: "center",
        alignItems: 'center',
        gap: theme.spacing(1),
        fontWeight: 600,

        "&:hover": {
            color: theme.palette.secondary.dark,
        }
    },

    span: {
        color: theme.palette.primary.light,
        fontWeight: 700,
        fontSize:26,

        "&:hover": {
            color:'#9630c9',
        }
    },
    
}));