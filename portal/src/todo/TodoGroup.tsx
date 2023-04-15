import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
    children: ReactNode | ReactNode[]
}

const Container = styled.div``;

const TodoGroup: React.FC<Props> = (props: Props): JSX.Element => {
    const { children } = props;
    return (
        <Container>
            {children}
        </Container>
    );
}

export default TodoGroup;