import { styled, Stack } from "@mui/material";


export const HomeWrapper = styled(Stack)(({ theme }) => ({
	width: '100%',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	gap: theme.spacing(8),

	".links":{
		flexDirection: 'row',
		gap: theme.spacing(4),

		"& a": {
			"& button": {
				border: `3px solid ${theme.palette.primary.dark}`,
				borderRadius: 100,
				width: 160,
				height: 50,
				boxShadow: `0px 1px 3px 0px ${theme.palette.primary.dark}`,

			},
		},
	},

	".icons":{
		gap:theme.spacing(4),
		flexDirection: 'row',
		alignItems: 'center',
	},

	".icon": {
		border: '2px solid #4200A7',
		borderRadius: 100,
		color: theme.palette.secondary.dark,
		padding: theme.spacing(1),
		fontSize: 22,
		display: 'flex',
		cursor: 'pointer',
		boxShadow: `0px 1px 3px 0px ${theme.palette.primary.dark}`,
	},

	
	".text__content":{
		width: '100%',
		color: theme.palette.secondary.dark, 
		gap: theme.spacing(3),
		maxWidth: 437,
		
		h1:{
			fontWeight: 700, 
			fontSize:26,
		},

		h2:{
			fontSize: 22,
			fontWeight: 700,


			"& span":{
				color: theme.palette.primary.light,
				fontSize:22,
				textDecoration: 'none',

				"&:hover": {
					color:theme.palette.secondary.light,
				},
			}
		},

		p:{
			fontWeight: 500,
		}
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

	img:{
		maxWidth: 360,
		width: '100%',
		height: 'auto',
	},



	span: {
		color: theme.palette.primary.light,
		fontWeight: 700,
		fontSize:26,
		textDecoration: 'none',

		"&:hover": {
			color:theme.palette.secondary.light,
		},
	},
	
}));