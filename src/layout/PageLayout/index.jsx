import { Outlet } from "react-router-dom";
import { SSHeader } from "../../components/";

const PageLayout = () => {
  return (
    <div className="flex gap-3 flex-col max-w-[375px] min-h-dvh mx-auto">
      <SSHeader />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
