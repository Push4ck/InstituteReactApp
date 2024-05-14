import { FaBell, FaShareAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { MdClass, MdOutlinePayment } from "react-icons/md";
import OverviewCard from "../OverviewCard/OverviewCard";
import Graph from "../Graph/Graph";
// import Toppers from "../Top/Toppers";
import ProgressBar from "../Progress/ProgressBar";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen p-4 dark:bg-gray-900">
        {/* top */}
        <div className="flex items-center justify-between">
          {/* title */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Dashboard
            </h1>
          </div>

          {/* buttons */}
          <div className="flex gap-4">
            {/* notification */}
            <div className="text-xl rounded-full p-2 text-yellow-400 hover:text-yellow-500 bg-white ring-4 ring-slate-500 dark:bg-gray-700 cursor-pointer">
              <FaBell />
            </div>

            {/* share */}
            <div className="text-xl rounded-full p-2 text-gray-400 hover:text-gray-500 bg-white ring-4 ring-slate-500 dark:bg-gray-700 cursor-pointer">
              <FaShareAlt />
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="border-t-2 border-slate-700 mt-6"></div>

        {/* bottom */}
        <div className="flex justify-between w-full">
          {/* bottom left */}
          <div className="p-1 w-full">
            {/* overview cards */}
            <div className="flex justify-between mt-4">
              {/* card 1 */}
              <div>
                <OverviewCard
                  bgcolor="bg-slate-200 dark:bg-gray-800"
                  title="Total Students"
                  count={`1,000`}
                  Icon1={<PiStudentFill />}
                  IconCol="text-slate-500"
                />
              </div>

              {/* card 2 */}
              <div>
                <OverviewCard
                  bgcolor="bg-slate-200 dark:bg-gray-800"
                  title="Fee Due"
                  count={`$ 10,000`}
                  Icon1={<MdOutlinePayment />}
                  IconCol="text-blue-500"
                />
              </div>

              {/* card 3 */}
              <div>
                <OverviewCard
                  bgcolor="bg-slate-200 dark:bg-gray-800"
                  title="Total Classrooms"
                  count={40}
                  Icon1={<MdClass />}
                  IconCol="text-amber-500"
                />
              </div>
            </div>

            {/* graph */}
            <div className="mt-4">
              <Graph />
            </div>

            {/* toppers */}
            {/* <div className="mt-5">
              <Toppers />
            </div> */}
          </div>

          {/* bottom right */}
          <div className="p-1">
            {/* progress */}
            <div className="mt-4">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
