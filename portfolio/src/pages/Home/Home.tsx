import { useTheme, Stack, Link, Typography, Button } from "@mui/material";
import { Container } from "../../components/container";
import { HomeWrapper } from "./Home.styled";
import { BiDownload, BiLogoInstagram,BiLogoLinkedin,BiLogoGithub } from "react-icons/bi";



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
                                            download
                                        </span>
                                    </Button>
                                </Link>
                                <Stack className="icons" direction="row">
                                    <Link className="icon">
                                        <a>
                                            <BiLogoInstagram/>
                                        </a>
                                    </Link>
                                    <Link className="icon">
                                        <a>
                                            <BiLogoLinkedin/>
                                        </a>
                                    </Link>
                                    <Link className="icon">
                                        <a>
                                            <BiLogoGithub/>
                                        </a>
                                    </Link>
                                </Stack>
                            </Stack> 
                        </Stack>
                </HomeWrapper>
        </Container>        
    )
}