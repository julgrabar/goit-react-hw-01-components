import styled from  'styled-components';

export const UserProfile= styled.div`
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    width: 300px;
    margin: 0 auto;
`

export const Description = styled.div`
    padding: 40px 0;
    text-align: center;
    color: grey;       
`
export const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
`
export const StatsList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
`

export const StatsItem = styled.li`
    text-align: center;
    background-color: #f5f5f5;
    padding: 10px;
    border: solid 1px #eceff1;
    flex-basis: calc(100%/3);
    display: flex;
    flex-direction: column;
`

export const Label = styled.span`
color: gray;
`