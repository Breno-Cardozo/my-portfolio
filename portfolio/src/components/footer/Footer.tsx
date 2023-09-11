import { useTheme, Stack, Link, Tooltip } from "@mui/material";
import { FooterWrapper } from "./Footer.styled";
import {BiHome , BiSolidArchiveIn, BiCode} from "react-icons/bi";


export const Footer = () => {
    const theme = useTheme();

    return(
        <>
            <FooterWrapper>
                <Stack className="footer" direction="row" spacing={2}>
                    <Tooltip title="Home">
                        <Link href="">
                            <span className="icons">
                                <BiHome/>
                            </span>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Conhecimentos">
                        <Link href="">
                            <span className="icons">
                                <BiCode/>
                            </span>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Projetos">
                        <Link href="">
                            <span className="icons">
                                <BiSolidArchiveIn />
                            </span>
                        </Link>
                    </Tooltip>
                </Stack>
            </FooterWrapper>
        </>
    )
}