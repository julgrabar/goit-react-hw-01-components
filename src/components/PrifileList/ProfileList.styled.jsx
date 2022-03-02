import styled from  'styled-components';

export const StyledProfileList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    padding:0;
`

export const ProfileItem = styled.li`
    flex-basis: calc((100% - 90px) / 4);
    max-width: 280px;

    :not(:last-child){
        margin-right: 30px;
    }
`

