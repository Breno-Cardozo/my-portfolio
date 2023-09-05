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
                    <Button className="btn">Contrate-me</Button>
                </nav>
            </HeaderWrapper>
        </>
    );
};