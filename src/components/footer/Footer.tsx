import { FooterWrapper } from "./Footer.styled";
import { Stack, Typography } from "@mui/material";

export const Footer = () => {
    return(
        <FooterWrapper>
            <Stack>
                <Typography>
                    2023 © <span>Breno Cardozo</span>
                </Typography>
            </Stack>
        </FooterWrapper>
    );
};