
import PropTypes from 'prop-types';
import Profile from "../profile/Profile";
import {ProfileList, ProfileItem} from "./ProfileList.styled"

function PaintingList({items}){
    return (
        <ProfileList>
            {items.map(item=>(
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
        </ProfileList>
    )
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default PaintingList;