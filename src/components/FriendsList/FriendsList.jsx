import PropTypes from "prop-types";

import { FriendItem } from "components/FriendItem/FriendItem";
import { StyledFriendsList } from "./FriendsList.styled";
import { Section } from "components/Utils/Container";

export const FriendsList = ({friends}) => {
    return (
        <Section>
        <StyledFriendsList>
        {friends.map(({id,name,isOnline,avatar})=>(
            <FriendItem 
                key = {id}
                name={name}
                isOnline = {isOnline}
                avatar= {avatar}
            />
        ))}
        </StyledFriendsList>
        </Section>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired
        })
    )
}