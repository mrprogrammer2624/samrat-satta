import { Container } from "../../components";
import { SSListbox } from "../../components/SSForm/Listbox";
import { people } from "../../constants";

const MyBids = () => {
  return (
    <Container>
      <div>
        <SSListbox people={people} />
      </div>
    </Container>
  );
};

export default MyBids;
