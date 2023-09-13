import {Stack, Typography} from "@mui/material";
import { ConhecimentosWrapper } from "./Conhecimentos.styled";
import { Container } from "../../components/container";
import Image from "../../assets/images/image.svg";



export const Conhecimentos = () => {
    
    return(
        <Container>
            <ConhecimentosWrapper>
                <Stack className="text__content">
                    <Typography variant="h1">
                        Confira a seguir os meus <span>conhecimentos</span>
                    </Typography>
                </Stack>
            </ConhecimentosWrapper>
            <img src={Image} alt="Svg imagem programação"/>
        </Container>
    )
}