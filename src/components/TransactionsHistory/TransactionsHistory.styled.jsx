import styled from "styled-components";

export const TransactionTable = styled.table`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0px 7px 8px 0px rgba(34, 60, 80, 0.2);
    border-collapse: collapse;
    border: 1px solid gray;

    th{
        background-color: #23838b;
        padding: 20px;
        color: white;
        text-transform: uppercase;
        border: 1px solid white;
    }

    tr:nth-child(even){
        background-color: #e4e4e4;
    }
    

    td{
        padding: 20px;
        border: 1px solid lightgray;
        color: gray;
        text-transform: capitalize;
    }
`