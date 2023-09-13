import {Stack, Typography} from "@mui/material";
import { ConhecimentosWrapper } from "./Conhecimentos.styled";
import { Container } from "../../components/container";
import Image from "../../assets/images/image.svg";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import {SiMui, SiMysql} from "react-icons/si";

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
                        <BiLogoReact/>
                        <BiLogoJavascript/>
                        <BiLogoTypescript/>
                        <BiLogoTailwindCss/>
                        <SiMui/>
                        <BiLogoHtml5/>
                        <BiLogoCss3/>
                        <BiLogoPhp/>
                        <SiMysql/>
                    </Stack>
                </Stack>

                <img src={Image} alt="Svg imagem programação"/>
            </ConhecimentosWrapper>
        </Container>
    )
}