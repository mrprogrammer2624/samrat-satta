import { SSInput } from "../SSForm";

export const SSEasyCard = ({ number }) => {
  return (
    <div className="bg-gray-75 shadow-xl gap-3 p-3 rounded-xl items-center flex flex-col justify-center">
      <div className=" leading-none shadow-xl w-10 h-10 flex items-center justify-center bg-white rounded-full text-center">
        {number}
      </div>
      <div className="text=-white">
        <SSInput
          placeholder={"Enter Amount"}
          className={"p-2 p text-center bg-transparent border-b text-white"}
          type={"number"}
        />
      </div>
    </div>
  );
};
