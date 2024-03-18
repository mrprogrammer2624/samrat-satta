import clsx from "clsx";

export const SSInput = ({
  parentClass,
  placeholder,
  className,
  label,
  labelClassName,
  id,
  value,
  name,
  handleChange,
  type,
  variant,
  Icons,
  ...rest
}) => {
  return (
    <div className={clsx(parentClass)}>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <div className="d-flex items-center relative">
        {Icons && (
          <span className="max-w-6 w-full absolute top-2/4 left-2 -translate-y-2/4">
            {Icons}
          </span>
        )}
        <input
          placeholder={placeholder}
          className={clsx(
            className,
            "input",
            {
              ["input-primary"]: variant == "primary",
              ["input-secondary"]: variant == "secondary",
            },
            {
              ["ps-11"]: Icons,
            }
          )}
          value={value}
          onKeyUp={handleChange}
          id={id}
          type={type}
          name={name}
          {...rest}
        />
      </div>
    </div>
  );
};
