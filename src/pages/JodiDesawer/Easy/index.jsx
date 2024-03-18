import { SSButton, SSEasyCard } from "../../../components";

export const Easy = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 h-[calc(100vh-250px)] overflow-auto">
        {Array.from({ length: 12 }).map((_, index) => (
          <SSEasyCard key={index} number={index} />
        ))}
      </div>
      <div className="flex flex-col gap-1 mt-1">
        <h5 className="text-right">Total : &#8377;00</h5>
        <SSButton variant={"primary"} rounded>
          Submit
        </SSButton>
      </div>
    </>
  );
};
