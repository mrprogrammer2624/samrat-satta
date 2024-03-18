import clsx from "clsx";

export const SSButton = ({
  children,
  className,
  id,
  name,
  handelChange,
  type,
  variant,
  value,
  green,
  rounded,
  rest,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        className,
        "btn",
        { ["btn-primary"]: variant == "primary" },
        {
          ["bg-[linear-gradient(319deg,_#dbf26e_0%,_#61fa74_37%,_#1cfdd6_100%)] hover:bg-[linear-gradient(90deg,_#dbf26e_0%,_#61fa74_37%,_#1cfdd6_100%)] text-gray-75"]:
            green,
        },
        { ["rounded-3xl"]: rounded }
      )}
      onClick={handelChange}
      id={id}
      name={name}
      value={value}
      {...rest}
    >
      {children}
    </button>
  );
};
