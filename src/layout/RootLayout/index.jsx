import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* <header /> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
