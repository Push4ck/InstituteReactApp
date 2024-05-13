import { FaBell, FaShareAlt } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { MdClass, MdOutlinePayment } from "react-icons/md";
import OverviewCard from "../OverviewCard/OverviewCard";
import Graph from "../Graph/Graph";
import Toppers from "../Top/Toppers";
import ProgressBar from "../Progress/ProgressBar";

const Hero = () => {
  return (
    <>
      <div className="w-full px-10 py-4">
        {/* top */}
        <div className="flex items-center justify-between">
          {/* title */}
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
          </div>

          {/* buttons */}
          <div className="flex gap-4">
            {/* notification */}
            <div className="text-xl rounded-full p-2 bg-slate-200 hover:bg-slate-100 cursor-pointer">
              <FaBell />
            </div>

            {/* share */}
            <div className="text-xl rounded-full p-2 bg-slate-200 hover:bg-slate-100 cursor-pointer">
              <FaShareAlt />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between w-full">
          {/* bottom left */}
          <div>
            {/* overview cards */}
            <div className="flex gap-5 my-5">
              {/* card 1 */}
              <OverviewCard
                bgcolor="bg-lime-200"
                title="Total Students"
                count={`1,000`}
                Icon1={<PiStudentFill />}
              />

              {/* card 2 */}
              <OverviewCard
                bgcolor="bg-sky-200"
                title="Total Classrooms"
                count={40}
                Icon1={<MdClass />}
              />

              {/* card 3 */}
              <OverviewCard
                bgcolor="bg-violet-300"
                title="Fee Due"
                count={`$ 10,000`}
                Icon1={<MdOutlinePayment />}
              />
            </div>

            {/* graph */}
            <div className="my-5">
              <Graph />
            </div>

            {/* toppers */}
            <div className="mt-5">
              <Toppers />
            </div>
          </div>

          {/* bottom right */}
          <div>
            {/* progress */}
            <div className="mt-10">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
