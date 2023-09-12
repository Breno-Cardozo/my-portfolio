import { Link, Stack, Tooltip } from "@mui/material";
import { NavigationWrapper } from "./Navigation.styled";
import {BiHome , BiSolidArchiveIn, BiCode} from "react-icons/bi";


export const Navigation = () => {

    return(
        <>
            <NavigationWrapper>
                <Stack className="navigation__content">
                    <Tooltip title="Home"   >
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
            </NavigationWrapper>
        </>
    )
}