import { styled, Stack } from "@mui/material";


export const ProjectsWrapper = styled (Stack)(({theme}) => ({
    width: '100%',
    gap: theme.spacing(20),
    justifyContent:'center',
    alignItems: 'center',

    

    ".hero__content":{
        flexDirection:"row",
        gap: theme.spacing(5),

        [theme.breakpoints.down("lg")]:{
            flexDirection:'column',
        },

        
        h3:{
            fontSize: 20,
            fontWeight:600,

            span:{
                color: theme.palette.primary.light,
                fontSize: 20,
    
                "&:hover":{
                    color: theme.palette.secondary.light,
                },
            },
        },

       
        
        p:{
            fontWeight:500,
        },
        
        span:{
            color: theme.palette.primary.light,
            fontSize: 16,

            "&:hover":{
                color: theme.palette.secondary.light,
            },
        },

        ".card":{
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.dark,


            ".text":{
               display: 'flex',
               gap:theme.spacing(1),
               flexDirection: 'column',
            },
        },


        ".icons":{
            flexDirection:'row',
            justifyContent:'center',
        },

        svg:{
            color: theme.palette.secondary.dark,
            padding: theme.spacing(1),
            fontSize:26,

                "&:hover":{
                    color: theme.palette.secondary.light,
                    },
        },
    },
}));