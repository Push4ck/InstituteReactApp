import { HiChevronDown } from "react-icons/hi";
import Progress from "./Progress";

const ProgressBar = () => {
  return (
    <>
      <div className="border shadow-md shadow-slate-300 w-[350px] p-5 rounded-xl">
        {/* top */}
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Earning</h1>
          <button className="flex font-semibold items-center gap-1 px-3 py-1 bg-slate-100 rounded-full">
            Month <HiChevronDown className="text-xl" />
          </button>
        </div>

        {/* progress */}
        <div className="flex justify-center mt-14">
          <Progress />
        </div>

        {/* color item */}
        <div className="flex justify-between mt-14">
          {/* color 1 */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-900"></div>
            <p className="font-bold">Sales</p>
          </div>

          {/* color 2 */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-lime-300"></div>
            <p className="font-bold">Profit</p>
          </div>

          {/* color 3 */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sky-200"></div>
            <p className="font-bold">Growth</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
