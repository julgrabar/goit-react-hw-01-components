
import { Global } from "./Global";
import { Container, Section } from "./Container";
import users from "../data/users.json";
import { ProfileList } from "./PrifileList/ProfileList";
import { Statistics } from "./Statistics/Statistics";
import stats from '../data/statistics.json'

export const App = () => {
  return (
    <Container>
    <Global />
    <Section>
      <ProfileList 
      items ={users}
      title= "Users"
      />
    </Section>
    <Section>
      <Statistics 
      title='Upload stats'
      items = {stats}
      />
    </Section>
    </Container>
  );
};
