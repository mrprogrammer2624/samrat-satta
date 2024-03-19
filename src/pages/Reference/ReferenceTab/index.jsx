import { Link } from "react-router-dom";
import { Icons } from "../../../utils/Icons";
import { SSButton } from "../../../components";

export const ReferenceTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div className="w-2/4">
          <h3 className="leading-6 font-semibold">
            Life Time Commission For{" "}
            <span className="text-primary">Referring</span>
          </h3>
          <p className="h6 text-gray-75 font-medium">introduce Friends</p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between shadow-2xl bg-white p-2 gap-1">
        <h5 className="uppercase text-gray-75 font-bold">REFERRAL CODE</h5>
        <h3 className="uppercase text-gray-75 font-bold">703358822</h3>
        <SSButton variant={"primary"} className={"w-fit"}>
          Copy
        </SSButton>
      </div>
      <div className="flex justify-between items-center gap-3">
        <Link
          className="bg-[#405aa2] text-white p-2 rounded-full"
          to={"https://www.facebook.com/"}
        >
          {Icons.facebook}
        </Link>
        <Link
          className="bg-[#2fabea] text-white p-2 rounded-full"
          to={"https://telegram.org/"}
        >
          {Icons.telegram}
        </Link>
        <Link className="bg-[#25B7D3] text-white p-2 rounded-full" to={""}>
          {Icons.share}
        </Link>
        <Link
          className="bg-[#63d26e] text-white p-2 rounded-full"
          to={"https://www.whatsapp.com/"}
        >
          {Icons.whatsapp}
        </Link>
      </div>
    </div>
  );
};
