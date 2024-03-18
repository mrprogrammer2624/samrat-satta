import { Icons } from "../../utils";

export const SSGameCard = ({ close, result, gameNumber, gameName }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-3 flex flex-col gap-4">
      <div className="flex gap-2 justify-between">
        <div className="flex gap-1 text-gray-75">
          <span>{Icons.clock}</span>
          <p>Close Time : {close}</p>
        </div>
        <div className="flex gap-1 text-gray-75">
          <span>{Icons.clock}</span>
          <p>result Time : {result}</p>
        </div>
      </div>
      <div className="flex gap-3 justify-between items-center">
        <div>
          <div className="bg-gray rounded-md w-full p-1">
            <span className="block">{Icons.grid}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-secondary font-semibold">{gameName}</h2>
          <div className="flex gap-3 items-center justify-center">
            <h3>{gameNumber}</h3>
            <div className="bg-secondary flex items-center justify-center text-white w-8 p-2 h-8 rounded-full">
              <p>New</p>
            </div>
            <h3>**</h3>
          </div>
          <p className="text-dark">Betting Is Running Now</p>
        </div>
        <div className="bg-secondary p-2 rounded-full">
          <span className="text-white">{Icons.playCircle}</span>
        </div>
      </div>
    </div>
  );
};
