import { Container, SSButton, SSInput } from "../../components";
import { AddMoneyBtn } from "../../constants";
import { Icons } from "../../utils";

const AddCash = () => {
  return (
    <Container>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 mx-auto">
          <div className="bg-[linear-gradient(74deg,_#dbf26e_0%,_#61fa74_37%,_#1cfdd6_100%)] text-white max-w-16 flex items-center justify-center rounded-full p-2">
            {Icons.wallet}
          </div>
          <div className="text-center flex-col flex items-center justify-center">
            <h4 className="flex gap-1">{Icons.rupees} 0 </h4>
            <p>Total Balance</p>
          </div>
        </div>
        <div>
          <div>
            <SSInput
              Icons={Icons.rupees}
              variant={"primary"}
              placeholder={"Enter Your Amount"}
            />
          </div>
          <div className="grid gap-3 grid-cols-4 mt-3">
            {AddMoneyBtn?.map((content, index) => (
              <SSButton
                key={index}
                className="border-gray-75 border px-1 py-2 hover:text-white hover:bg-secondary"
              >
                {content.money}
              </SSButton>
            ))}
          </div>
        </div>
        <div>
          <SSButton variant={"primary"} green rounded>
            Add Fund
          </SSButton>
        </div>
        <div className="text-center">
          <h6 className="text-secondary font-semibold text-center mb-1">
            Note
          </h6>
          <div className="flex flex-col gap-1">
            <p className="text-gray-75 h6 font-medium">
              minimum Deposit 100/- Per transaction
            </p>
            <p className="text-gray-75 h6 font-medium">
              Maximum Deposit -5 lakh per day
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddCash;
