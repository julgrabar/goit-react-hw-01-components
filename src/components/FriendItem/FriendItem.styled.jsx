import styled from "styled-components";

export const StyledFriendItem = styled.li`
    padding:  15px 30px;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 15px;
    }

    img{
        width: 100px;
        height: 100px;
        margin-right: 30px;
    }

    p{
        font-size: 30px;
        font-weight: 500;
    }

`

export const IsOnline = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 50px;
    background-color: ${({status})=>status? 'green' : 'red'};

`