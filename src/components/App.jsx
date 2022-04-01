
import { Global } from "./Utils/Global";
import { Container } from "./Utils/Container";
import user from "../data/users.json";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import data from '../data/statistics.json';
import friends from '../data/friends.json';
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./TransactionsHistory/TransactionsHistoty";
import transactions from "../data/transactions.json"


export const App = () => {
  return (
    <Container>
    <Global />
    
    <Profile 
    username={user.username}
    tag={user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />

    <Statistics 
    title='Upload stats'
    stats={data}
    />

    <FriendsList 
    friends={friends}
    />

    <TransactionHistory
    items={transactions}
    />
    </Container>
  );
};
