import {Stack, Typography, Tooltip} from "@mui/material";
import { ConhecimentosWrapper } from "./Conhecimentos.styled";
import { Container } from "../../components/container";
import Image from "../../assets/images/image.svg";
import {  BiLogoFigma, BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {SiMui, SiMysql, SiVite} from "react-icons/si";

export const Conhecimentos = () => {
    
    return(
        <Container>
            <ConhecimentosWrapper>
                <Stack className="text__content">
                    
                    <Typography variant="h1">
                        Confira a seguir os meus <span>conhecimentos</span>
                    </Typography>
                    
                    <Typography>
                        Alguns de meus conhecimentos na área da tecnologia são...
                    </Typography>
                    <Stack className="icons">
                        <Tooltip title="React">
                            <a>   
                                <BiLogoReact/>
                                
                            </a>
                        </Tooltip>
                        <Tooltip title="JavaScript">
                            <a>
                                <BiLogoJavascript/>
                            </a>
                        </Tooltip>
                        <Tooltip title="TypeScript">
                            <a>
                                <BiLogoTypescript/>
                            </a>
                        </Tooltip>
                        <Tooltip title="Tailwind CSS">
                            <a>
                                <BiLogoTailwindCss/>
                            </a>
                        </Tooltip>
                        <Tooltip title="MUI">
                            <a>
                                <SiMui/>
                            </a>
                        </Tooltip>
                        <Tooltip title="PHP">
                            <a>
                                <BiLogoPhp/>
                            </a>
                        </Tooltip>
                        <Tooltip title="MySQL">
                            <a>
                                <SiMysql/>
                            </a>
                        </Tooltip>
                        <Tooltip title="Figma">
                            <a>
                                <BiLogoFigma/>
                            </a>
                        </Tooltip>
                        <Tooltip title="Vite">
                            <a>
                                <SiVite/>
                            </a>
                        </Tooltip>
                    </Stack>
                </Stack>

                <img src={Image} alt="Svg imagem programação"/>
            </ConhecimentosWrapper>
        </Container>
    )
}