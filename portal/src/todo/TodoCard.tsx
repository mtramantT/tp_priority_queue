import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    title: string
    subtitle: string;
}

const Container = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const Subtitle = styled.span`
    font-size: 16px;
    font-weight: lighter;
    margin-left: 10px;
`;

const MainView = styled.div`
    position: relative;
    height: 1.5rem;
`;
const ButtonGroup = styled.div`
    position: absolute;
    right: 0;
`
const Heading = styled.div`
    position: absolute;
    left: 0;
`;

const MoreDetails = styled.div<{isOpen: boolean}>`
    display: ${({isOpen}) => isOpen ? 'block;' : 'none;'};
`;

const TodoCard: React.FC<Props> = (props: Props): JSX.Element => {
    const { title, subtitle } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Container onClick={() => setIsOpen((prev) => !prev)}>
            <MainView>
                <Heading>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Heading>
                <ButtonGroup>
                    <FontAwesomeIcon icon="trash-alt" />
                </ButtonGroup>
            </MainView>
            <MoreDetails isOpen={isOpen}>Description</MoreDetails>
        </Container>
    );
}

export default TodoCard;