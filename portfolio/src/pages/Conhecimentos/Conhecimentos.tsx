import { Stack, Typography, Tooltip } from "@mui/material";
import { ConhecimentosWrapper } from "./Conhecimentos.styled";
import { Container } from "../../components/container";
import Image from "../../assets/images/image.svg";
import { BiLogoFigma, BiLogoPhp, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiMui, SiMysql, SiVite } from "react-icons/si";

export const Conhecimentos = () => {

    return (
        <Container>
            <ConhecimentosWrapper>
                <Stack className="text__content">

                    <Typography variant="h1">
                        Confira a seguir os meus <span>conhecimentos</span>
                    </Typography>

                    <Typography>
                        Alguns de meus conhecimentos na área da tecnologia são...
                    </Typography>
                    <Stack className="icones">
                        <Stack className="icons">
                            <Tooltip title="React">
                                <a>
                                    <BiLogoReact />
                                </a>
                            </Tooltip>
                            <Tooltip title="TypeScript">
                                <a>
                                    <BiLogoTypescript />
                                </a>
                            </Tooltip>
                        </Stack>
                        <Stack className="icons">
                            <Tooltip title="Tailwind CSS">
                                <a>
                                    <BiLogoTailwindCss />
                                </a>
                            </Tooltip>
                            <Tooltip title="MUI">
                                <a>
                                    <SiMui />
                                </a>
                            </Tooltip>
                        </Stack>
                        <Stack className="icons">
                            <Tooltip title="PHP">
                                <a>
                                    <BiLogoPhp />
                                </a>
                            </Tooltip>
                            <Tooltip title="MySQL">
                                <a>
                                    <SiMysql />
                                </a>
                            </Tooltip>
                        </Stack>
                        <Stack className="icons">
                            <Tooltip title="Figma">
                                <a>
                                    <BiLogoFigma />
                                </a>
                            </Tooltip>
                            <Tooltip title="Vite">
                                <a>
                                    <SiVite />
                                </a>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Stack>

                <img src={Image} alt="Svg imagem programação" />
            </ConhecimentosWrapper>
        </Container>
    )
}