import { Container } from "../../components";
import { Icons } from "../../utils";

const NotificationHistory = () => {
  return (
    <Container>
      <div className="bg-white flex items-center rounded-lg gap-4 shadow-2xl p-3">
        <div className="text-primary">{Icons.errorWarning}</div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold leading-none text-gray-75">Error</h3>
          <p className="text-gray-500 uppercase font-medium">
            Lorem ipsum dolor sit amet elit. Facere blanditiis eaque ducimus.
          </p>
          <p className="text-secondary h6 font-medium">15/02/2023 05:23PM</p>
        </div>
      </div>
    </Container>
  );
};

export default NotificationHistory;
