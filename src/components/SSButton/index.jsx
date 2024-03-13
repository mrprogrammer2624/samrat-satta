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
  rest,
}) => {
  return (
    <button
      type={type}
      className={clsx(className, "btn", {
        ["btn-primary"]: variant == "primary",
      })}
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
