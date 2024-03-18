import { SSButton, SSInput } from "../../../components";
import { tbodySpecial } from "../../../constants";
import { Icons } from "../../../utils";

export const Special = () => {
  return (
    <>
      <div className="flex flex-col gap-3 h-[calc(100vh-220px)] overflow-auto">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <SSInput
              variant="primary"
              className={"border border-gray-75 py-2"}
              placeholder={"Enter 4 digit"}
              type="number"
            />
          </div>
          <div>
            <SSInput
              variant="primary"
              className={"border border-gray-75 py-2"}
              placeholder={"Enter Amount"}
              type="number"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div></div>
          <SSButton variant={"primary"} className="py-2" rounded={true}>
            <span>{Icons.plus}</span> AddMore
          </SSButton>
        </div>
        <div className="px-2">
          <div className="bg-gray-50 shadow-2xl py-2 px-4">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="w-10">No</th>
                  <th className="w-15">Amount</th>
                  <th className="w-18">Game Type</th>
                </tr>
              </thead>
              <tbody className="">
                {tbodySpecial.map((content, index) => (
                  <tr key={index} className="text-center">
                    <td className="w-10">{content.No}</td>
                    <td className="w-15">{content.Amount}</td>
                    <td className="w-18">{content.GameType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4 className="text-right">Total:&#8377; 0</h4>
        </div>
      </div>
      <div className="mt-3">
        <SSButton variant={"primary"} rounded>
          Submit
        </SSButton>
      </div>
    </>
  );
};
