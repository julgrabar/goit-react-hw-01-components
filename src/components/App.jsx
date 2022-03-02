
import { Global } from "./Global";
import { Container, Section } from "./Container";
import users from "../users.json";
import { ProfileList } from "./PrifileList/ProfileList";

export const App = () => {
  return (
    <>
    <Global />
    <Container>
    <Section>
      <ProfileList 
      items ={users}
      title= "Users"
      />
    </Section>
    </Container>
    </>
  );
};
