import { Container, SSButton } from "../../components";

const MyBalance = () => {
  return (
    <Container>
      <div className="bg-white shadow-xl p-2 flex-col flex gap-3">
        <div className="text-center flex flex-col justify-center border-b border-gray-75 pb-3 items-center gap-3">
          <h4>Total Balance</h4>
          <h6>&#8377; 1000.00</h6>
          <SSButton
            className="w-fit py-3 px-4 bg-secondary"
            variant={"primary"}
          >
            Add Cash
          </SSButton>
        </div>
        <div className="text-right flex flex-col justify-center border-b border-gray-75 pb-3 items-start gap-1">
          <h6 className="text-gray-75 font-medium">Deposit Amount</h6>
          <h4 className="font-semibold">&#8377; 1000.00</h4>
        </div>
        <div className="flex border-b items-center justify-between border-gray-75 pb-3">
          <div className="text-right flex flex-col justify-center items-start gap-1">
            <h6 className="text-gray-75 font-medium">Winnings</h6>
            <h4 className="font-semibold">&#8377; 1000.00</h4>
          </div>
          <div>
            <SSButton
              variant={"primary"}
              className={
                "bg-transparent border border-secondary  text-secondary hover:text-white"
              }
            >
              WithDraw
            </SSButton>
          </div>
        </div>
        <div className="text-right flex flex-col justify-center pb-3 items-start gap-1">
          <h6 className="text-gray-75 font-medium">Deposit Amount</h6>
          <h4 className="font-semibold">&#8377; 1000.00</h4>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-medium">My Transition</h3>
      </div>
    </Container>
  );
};

export default MyBalance;
