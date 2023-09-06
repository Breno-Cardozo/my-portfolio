import { useTheme, Stack, Link, Typography, Button } from "@mui/material";
import { Container } from "../../components/container";
import { HomeWrapper } from "./Home.styled";
import { BiDownload, BiLogoInstagram,BiLogoLinkedin,BiLogoGithub } from "react-icons/bi";
import Img from "../../assets/images/me.png";



export const Home = () => {
    const theme = useTheme();

    return (
        <Container>
                <HomeWrapper>
                    <Stack className="all">
                        <Stack className="hero__content">
                            <Typography className="tittle">
                                Olá, meu nome é <span>Breno Cardozo!</span>
                            </Typography>
                            <Typography sx={{ color:theme.palette.secondary.dark, fontSize:26, fontWeight: 700,}}>
                                Desenvolvedor <span>Full-Stack</span>
                            </Typography>
                            <Typography sx={{ color:theme.palette.secondary.dark, fontSize:16, fontWeight: 600,}}>
                                Tenho 18 anos, sou um estudante na área da programação que busco me aperfeiçoar dia após dia, atualmente estudo na Etec MCM, estou no último ano do curso Novotec Integrado de Informática para Internet
                            </Typography>
                           <Stack className="links">
                                <Link>
                                    <Button variant="contained" sx={{
                                        border:`3px solid ${theme.palette.primary.dark}`,
                                        borderRadius: 100,
                                        width:160,
                                        height:50,
                                        boxShadow: `0px 1px 3px 0px ${theme.palette.primary.dark}`,
                                        margin: theme.spacing(4,0),
                                    }}>
                                        <span className="cv">
                                            <BiDownload size={28}/>
                                            Currículo
                                        </span>
                                    </Button>
                                </Link>
                                <Stack className="icons" direction="row">
                                    <Link href="https://www.instagram.com/brenocardozof/" >
                                        <span className="icon">
                                            <BiLogoInstagram/>
                                        </span>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/breno-c-10432021b/">
                                        <span className="icon">
                                            <BiLogoLinkedin/>
                                        </span>
                                    </Link>
                                    <Link href="https://github.com/Breno-Cardozo">
                                        <span className="icon">
                                            <BiLogoGithub/>
                                        </span>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Stack>
                        <img src={Img}/>
                    </Stack>
                </HomeWrapper>
        </Container>        
    )
}