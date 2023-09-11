import { useTheme, Typography, Button } from "@mui/material";
import { HeaderWrapper } from "./Header.styled";
import { Link } from "react-router-dom";

export const Header = () => {
    const theme = useTheme();



    return(
        <>
            <HeaderWrapper>
                <nav>
                    <Link to="/">
                        <Typography className="logo">BCF</Typography>
                    </Link>
                    <Button className="btn" target="_blank" href="https://wa.me/5511995868505/? text=Olá! Tenho interesse em seu serviço e gostaria de fazer um orçamento.">Contrate-me</Button>
                </nav>
            </HeaderWrapper>
        </>
    );
};