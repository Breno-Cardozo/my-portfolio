import { useTheme } from "@mui/material/styles";
import { HeaderWrapper } from "./Header.styled";

export const Header = () => {
    const theme = useTheme();



    return(
        <>
            <HeaderWrapper>
                <nav>
                    <a className="logo">BCF</a>
                    <button>Contrate-me</button>
                </nav>
            </HeaderWrapper>
        </>
    );
};