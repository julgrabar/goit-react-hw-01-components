
import { Global } from "./Global";
import { Container } from "./Container";
import users from "../data/users.json";
import { ProfileList } from "./PrifileList/ProfileList";
import { Statistics } from "./Statistics/Statistics";
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import { FriendsList } from "./FriendsList/FriendsList";
import { Transactions } from "./TransactionsHistory/TransactionsHistoty";
import transactions from "../data/transactions.json"

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

    <Transactions
    items={transactions}
    title="Transaction history"
    />
    </Container>
  );
};
