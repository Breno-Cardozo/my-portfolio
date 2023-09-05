import { useTheme, Stack, Link } from "@mui/material";
import { FooterWrapper } from "./Footer.styled";
import {BiHome , BiSolidArchiveIn, BiCode} from "react-icons/bi";


export const Footer = () => {
    const theme = useTheme();

    return(
        <>
            <FooterWrapper>
                <Stack className="footer" direction="row" spacing={2}>
                    <Link href="">
                        <span className="icons">
                            <BiHome/>
                        </span>
                    </Link>
                    <Link href="">
                        <span className="icons">
                            <BiCode/>
                        </span>
                    </Link>
                    <Link href="">
                        <span className="icons">
                            <BiSolidArchiveIn />
                        </span>
                    </Link>
                </Stack>
            </FooterWrapper>
        </>
    )
}