import { Tab } from "@headlessui/react";
import clsx from "clsx";

export const SSTab = ({ TabName, TabContent }) => {
  return (
    <div className="w-full max-w-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 p-1">
          {TabName?.map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                clsx(
                  "w-full border-b border-dark-25 py-2.5 text-sm font-semibold leading-5 focus:outline-none focus-visible:outline-none focus:ring-0",
                  selected
                    ? "text-blue-700 border-primary text-primary"
                    : "hover:border-secondary hover:text-primary"
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {TabContent?.map((posts, idx) => (
            <Tab.Panel key={idx} className={clsx("rounded-xl p-3")}>
              {posts.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
