import { Outlet, useLocation } from "react-router-dom";
import { SSHeader } from "../../components/";

const PageLayout = () => {
  let location = useLocation();

  let output = location.pathname.replace(/-/g, " ").replace("/", "");
  return (
    <div className="flex gap-3 flex-col max-w-[375px] min-h-dvh mx-auto">
      <SSHeader pageName={output} />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
