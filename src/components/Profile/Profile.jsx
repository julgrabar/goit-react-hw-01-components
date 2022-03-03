import PropTypes from 'prop-types';
import { BigText } from "components/Title/BigText.styled";

import { UserProfile, Description, StatsList, StatsItem,Name, Label } from './Profile.styled';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return(
        <UserProfile>
            <Description>
                <img
                src={avatar}
                alt="User avatar"
                />
                <Name>{username}</Name>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>

            <StatsList>
                <StatsItem>
                <Label>Followers</Label>
                <BigText size="18px">{stats.followers}</BigText>
                </StatsItem>
                <StatsItem>
                <Label>Views</Label>
                <BigText size="18px">{stats.views}</BigText>
                </StatsItem>
                <StatsItem>
                <Label>Likes</Label>
                <BigText size="18px">{stats.likes}</BigText>
                </StatsItem>
            </StatsList>
        </UserProfile>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats: PropTypes.objectOf(
        PropTypes.number
      ),
    size: PropTypes.string
}