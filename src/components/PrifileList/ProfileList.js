
import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import {StyledProfileList, ProfileItem} from "./ProfileList.styled";
import { Title } from 'components/Title/Title.styled';

export const ProfileList = ({items , title}) => {
    return (
        <div>
            {title && <Title>{title}</Title>}
            <StyledProfileList>
            {items.map((item)=>(
                    <ProfileItem key={item.tag}>
                        <Profile 
                        username={item.username}
                        tag={item.tag}
                        location = {item.location}
                        avatar = {item.avatar}
                        stats = {item.stats}
                        />
                    </ProfileItem>
            ))
            }
        </StyledProfileList>
        </div>
    )
}

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired)
}

