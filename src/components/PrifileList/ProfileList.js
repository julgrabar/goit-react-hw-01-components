
import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import {StyledProfileList, ProfileItem} from "./ProfileList.styled";
import { Title } from 'components/Title/Title.styled';
import { Section } from 'components/Utils/Container';

export const ProfileList = ({items , title}) => {
    return (
        <Section>
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
        </Section>
    )
}

ProfileList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired)
}

