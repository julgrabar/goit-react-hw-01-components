
import { Global } from "./Global";
import { Container } from "./Container";
import users from "../data/users.json";
import { ProfileList } from "./PrifileList/ProfileList";
import { Statistics } from "./Statistics/Statistics";
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import { FriendsList } from "./FriendsList/FriendsList";

export const App = () => {
  return (
    <Container>
    <Global />
    
    <ProfileList 
    items ={users}
    title= "Users"
    />

    <Statistics 
    title='Upload stats'
    items = {stats}
    />

    <FriendsList 
    items={friends} 
    title="Friends"/>

    </Container>
  );
};
