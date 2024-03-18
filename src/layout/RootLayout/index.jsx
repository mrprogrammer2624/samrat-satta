import { Outlet } from "react-router-dom";
import { SSHeader, SSFooter } from "../../components/";

const RootLayout = () => {
  return (
    <div className="flex flex-col max-w-[375px] min-h-dvh mx-auto">
      <SSHeader wallet user />
      <main className="">
        <Outlet />
      </main>
      <SSFooter />
    </div>
  );
};

export default RootLayout;
