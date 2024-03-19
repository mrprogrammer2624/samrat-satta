import { Container, SSTab } from "../../components";
import { reference, referenceComponents } from "../../constants";

const Reference = () => {
  return (
    <Container className={"flex flex-col gap-3"}>
      <div className="flex items-center justify-between shadow-2xl bg-white p-2 gap-2">
        <h4 className="font-medium">Total Referral 0</h4>
        <h4 className="font-medium">Total Earnings 0</h4>
      </div>
      <SSTab TabName={reference} TabContent={referenceComponents} />
      <div>
        <h3>Recently Joined</h3>
      </div>
    </Container>
  );
};

export default Reference;
