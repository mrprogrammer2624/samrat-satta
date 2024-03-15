import { Container, SSButton, SSInput } from "../../components";

const BankDetails = () => {
  return (
    <Container>
      <div>
        <form action="" className="flex flex-col gap-5">
          <SSInput type="text" placeholder={"Bank Name"} variant={"primary"} />
          <SSInput
            type="text"
            placeholder={"Account Holder Name"}
            variant={"primary"}
          />
          <SSInput
            type="Number"
            placeholder={"Account Number"}
            variant={"primary"}
          />
          <SSInput type="text" placeholder={"IFSC Code"} variant={"primary"} />
          <SSButton variant={"primary"}>Update</SSButton>
        </form>
      </div>
    </Container>
  );
};

export default BankDetails;
