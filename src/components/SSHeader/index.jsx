import clsx from "clsx";
import { Container, SSButton } from "../";
import { Icons } from "../../utils/";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { asideBarList } from "../../constants";

export const SSHeader = ({ wallet, user, pageName }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="">
      <Container className="relative py-3">
        {/* Header Main */}
        <div className="flex items-center justify-between">
          {/* Left Side Header */}
          <div>
            {user && (
              <div className="flex items-center justify-center gap-3">
                {/* Icons */}
                <button
                  className="text-primary min-w-8 w-full"
                  onClick={() => setIsActive((current) => !current)}
                >
                  {Icons.user}
                </button>
                <h3 className="text-black font-medium whitespace-nowrap uppercase">
                  <span className="font-semibold">samrat</span>satta
                </h3>
              </div>
            )}
            {!user && (
              <div className="flex items-center justify-center gap-3">
                {/* Icons */}
                <Link
                  to="/"
                  className="text-primary min-w-8 w-full rotate-180"
                  onClick={() => setIsActive((current) => !current)}
                >
                  {Icons.arrowRight}
                </Link>
                <h4 className="text-black font-semibold whitespace-nowrap capitalize">
                  {pageName}
                </h4>
              </div>
            )}
          </div>
          {/* Right Side Header */}
          {wallet && (
            <div>
              <SSButton
                handelChange={() => navigate("/add-cash")}
                variant="primary"
                className="py-2 px-4"
              >
                0
                <span className="bg-white p-1 text-primary rounded-md">
                  {Icons.plusWithCircle}
                </span>
              </SSButton>
            </div>
          )}
        </div>

        {/* Aside Header */}
        {user && (
          <>
            <div
              className={clsx(
                "min-h-dvh w-full fixed top-0 start-2/4 -translate-x-2/4 bg-[rgb(0_0_0_/_60%)] container transition-all ease-linear duration-300",
                isActive === true
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              )}
            ></div>
            <div
              className={clsx(
                isActive === true
                  ? "translate-x-0 opacity-1"
                  : "-translate-x-full opacity-0",
                "min-h-dvh bg-white absolute w-3/4 top-0 left-0 transition-all ease-linear duration-300 p-3 shadow-sm after:"
              )}
            >
              <div className="flex gap-2 item-center justify-start border-gray-75 border-b-2 py-1">
                <button onClick={() => setIsActive((current) => !current)}>
                  {Icons.user}
                </button>
                <div className="flex justify-between items-center w-[-webkit-fill-available]">
                  <div>
                    <h4 className="font-medium">User</h4>
                    <p className="text-primary">Edit Profile</p>
                  </div>
                  <Link className="">{Icons.arrowRight}</Link>
                </div>
              </div>
              <ul className="h-[calc(100dvh-60px-50px-24px-32px)] overflow-auto flex flex-col gap-2 my-4 scrollbarNone">
                {asideBarList.map((item, index) => {
                  return (
                    <li
                      key={index + item.title}
                      className="py-2 border-b border-black"
                    >
                      <NavLink
                        to={item.slug}
                        className="flex hover:bg-gray gap-3 items-center justify-start"
                      >
                        <span className="flex max-w-8">{item.icons}</span>
                        <h4 className="flex font-medium">{item.title}</h4>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto flex border-t-2 border-gray-75 py-3">
                <Link className="flex items-center justify-start gap-3">
                  <span>{Icons.plusWithCircle}</span>
                  <h4 className="ont-medium">Logout</h4>
                </Link>
              </div>
            </div>
          </>
        )}
      </Container>
    </header>
  );
};
