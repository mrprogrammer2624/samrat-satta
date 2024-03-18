import { Container, SSButton, SSInput } from "../../components";

const AddCash = () => {
  return (
    <Container>
      <div className="flex flex-col gap-3">
        <div>
          <div></div>
          <div>
            <h4> 0 </h4>
            <p>Total Balance</p>
          </div>
        </div>
        <div>
          <div>
            <SSInput placeholder={"Enter Your Amount"} />
          </div>
          <div></div>
        </div>
        <div>
          <SSButton>Add Fund</SSButton>
        </div>
        <div>
          <h6>Note</h6>
          <p>minimum Deposit 100/- Per transaction</p>
          <p>Maximum Deposit -5 lakh per day</p>
        </div>
      </div>
    </Container>
  );
};

export default AddCash;
