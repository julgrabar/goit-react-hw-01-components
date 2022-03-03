import styled from "styled-components";


export const Stats = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    color: gray;
    border-radius: 5px;
    overflow: hidden;

    ul{
        display: flex;
    }

`

export const StatsItem = styled.li`
    flex-grow: 1;
    padding:30px;
    text-align: center;
    color: #fff;
    background-color: ${({color})=>color};
`

