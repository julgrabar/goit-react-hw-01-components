import PropTypes from "prop-types";
import { StyledFriendItem } from "./FriendItem.styled";
import { IsOnline } from "./FriendItem.styled";

export const FriendItem = ({avatar, name,isOnline}) =>{
    return (
    <StyledFriendItem>
        <IsOnline status = {isOnline} />
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
    </StyledFriendItem>
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}