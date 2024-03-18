import { Container, SSTab } from "../../components";
import { JodiDesawerTabContent, JodiDesawerTabName } from "../../constants";

const JodiDesawer = () => {
  return (
    <Container>
      <SSTab TabName={JodiDesawerTabName} TabContent={JodiDesawerTabContent} />
    </Container>
  );
};

export default JodiDesawer;
