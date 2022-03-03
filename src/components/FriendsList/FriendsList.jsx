import PropTypes from "prop-types";

import { FriendItem } from "components/FriendItem/FriendItem";
import { StyledFriendsList } from "./FriendsList.styled";
import { Section } from "components/Container";
import { Title } from "components/Title/Title.styled";

export const FriendsList = ({items, title}) => {
    return (
        <Section>
        {title && <Title>{title}</Title>}
        <StyledFriendsList>
        {items.map((item)=>(
            <FriendItem 
                key = {item.id}
                name={item.name}
                isOnline = {item.isOnline}
                avatar= {item.avatar}
            />
        ))}
        </StyledFriendsList>
        </Section>
    )
}

FriendsList.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired
        })
    )
}