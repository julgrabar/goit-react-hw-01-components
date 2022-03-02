import PropTypes from 'prop-types';

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
                <p>`@{tag}`</p>
                <p>{location}</p>
            </Description>

            <StatsList>
                <StatsItem>
                <Label>Followers</Label>
                <span>{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                <Label>Views</Label>
                <span>{stats.views}</span>
                </StatsItem>
                <StatsItem>
                <Label>Likes</Label>
                <span>{stats.likes}</span>
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
      )
}