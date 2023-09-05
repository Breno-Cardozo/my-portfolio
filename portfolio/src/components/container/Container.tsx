import * as Styled from "./Container.styled";
import { ContainerProps } from "./Container.types";

export const Container = ({ children } : ContainerProps) => {
    return (
        <Styled.ContainerWrapper>
            {children}
        </Styled.ContainerWrapper>
    )
};
