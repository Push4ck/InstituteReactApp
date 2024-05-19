import { PiStudentFill } from "react-icons/pi";
import { MdClass, MdOutlinePayment } from "react-icons/md";
import OverviewCard from "../OverviewCard/OverviewCard";
import Graph from "../Graph/Graph";
import ProgressBar from "../Progress/ProgressBar";

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-screen px-4">
        {/* main */}
        <div className="flex justify-between w-full xs:flex-col items-center xl:flex-row">
          {/* left */}
          <div className="p-1 w-full">
            {/* overview cards */}
            <div className="flex items-center justify-between mt-4 xs:flex-col gap-4 xl:flex-row">
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
          </div>

          {/* right */}
          <div className="p-1">
            {/* progress */}
            <div className="mt-4 xs:mb-5 xl:mb-0">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
