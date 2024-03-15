import { NavLink } from "react-router-dom";
import { Container } from "../Container";
import clsx from "clsx";
import { FooterContent } from "../../constants/";

export const SSFooter = () => {
  return (
    <footer className="mt-auto">
      <Container>
        <ul className="flex gap-2 overflow-x-auto">
          {FooterContent?.map((content, index) => {
            return (
              <li
                key={content.name + index}
                className="text-center min-w-13 w-full"
              >
                <NavLink
                  to={content.url}
                  className={clsx(
                    ({ isActive }) => (isActive ? "active" : ""),
                    "p flex items-center justify-center gap-2 flex-col w-full h-full"
                  )}
                >
                  <span className="max-w-8 block w-full">{content.icons}</span>
                  <span>{content.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
};
