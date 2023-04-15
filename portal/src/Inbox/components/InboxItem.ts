import styled from "styled-components";

// Styled ListGroup Item
const InboxItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid #e3e3e3;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #f8f9fa;
        }
    `
// Create a styled Inbox Column for the InboxItem
export const InboxColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: blue;
    margin-right: 1rem;
    `


export default InboxItem;
