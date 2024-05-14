import { HiChevronDown } from "react-icons/hi";
import Progress from "./Progress";

const ProgressBar = () => {
  return (
    <>
      <div className="w-[350px] p-5 rounded-xl bg-slate-200 dark:bg-gray-800">
        {/* top */}
        <div className="flex justify-between">
          <h1 className="text-xl font-bold dark:text-white">Earning</h1>
          <button className="flex font-semibold items-center gap-1 px-3 py-1 bg-slate-100 rounded-full dark:bg-slate-700 dark:text-white">
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
            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
            <p className="font-bold dark:text-white">Sales</p>
          </div>

          {/* color 2 */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <p className="font-bold dark:text-white">Profit</p>
          </div>

          {/* color 3 */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <p className="font-bold dark:text-white">Growth</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
