import { useTheme, Stack, Link, Typography } from "@mui/material";
import { Container } from "../../components/container";
import { HomeWrapper } from "./Home.styled";



export const Home = () => {
    const theme = useTheme();

    return (
        <Container>
                <HomeWrapper>
                        <Stack className="hero__content">
                            <Typography className="tittle">
                                Olá, meu nome é <span>Breno Cardozo!</span>
                            </Typography>
                            <Typography sx={{ color:theme.palette.secondary.dark, fontSize:26, fontWeight: 700,}}>
                                Desenvolvedor <span>Full-Stack</span>
                            </Typography>
                            <Typography sx={{ color:theme.palette.secondary.dark, fontSize:16, fontWeight: 700,}}>
                                Tenho 18 anos, sou um estudante na área da programação que busco me aperfeiçoar dia após dia, atualmente estudo na Etec MCM, estou no último ano do curso Novotec Integrado de Informática para Internet
                            </Typography>
                        </Stack>
                </HomeWrapper>
        </Container>        
    )
}