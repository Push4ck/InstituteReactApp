import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdClass,
  MdOutlinePayment,
  MdHeadphones,
  MdExpandLess,
  MdExpandMore,
  MdLogout,
} from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { useState } from "react";

const SideBar = () => {
  // sub menu
  const [classroomOpen, setClassroomOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  // revert
  const toggleClassroom = () => {
    setClassroomOpen(!classroomOpen);
  };

  const togglePayment = () => {
    setPaymentOpen(!paymentOpen);
  };

  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  };

  return (
    <div className="bg-slate-900 h-screen p-4 pt-8 duration-300 flex flex-col justify-between w-64">
      {/* top */}
      <div className="inline-flex items-center">
        {/* image */}
        {/* <img src={Logo} alt="" /> */}

        {/* text */}
        <NavLink to="/">
          <h1 className="text-3xl font-bold text-white ml-4">Duck</h1>
        </NavLink>
      </div>

      {/* mid */}
      <div>
        {/* sidebar links */}
        <ul className="space-y-5 flex flex-col items-start">
          {/* dashboard */}
          <li className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer px-2">
            <NavLink
              to="/"
              activeClassName="active"
              className="flex items-center gap-x-4"
            >
              <MdDashboard className="text-4xl block float-left" />
              <span className="text-base font-medium">Dashboard</span>
            </NavLink>
          </li>

          {/* classroom */}
          <li
            className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer px-2"
            onClick={toggleClassroom}
          >
            <NavLink
              to="/classroom"
              activeClassName="active"
              className="flex items-center gap-x-4"
            >
              <MdClass className="text-4xl block float-left" />
              <span className="text-base font-medium">Class Room</span>
            </NavLink>
            {classroomOpen ? (
              <MdExpandLess className="text-xl hover:bg-slate-200 rounded-full" />
            ) : (
              <MdExpandMore className="text-xl hover:bg-slate-200 rounded-full" />
            )}
          </li>
          {classroomOpen && (
            // sub menu
            <ul className="pl-6 space-y-3">
              {/* add classroom */}
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="/add-classroom" activeClassName="active">
                  <span className="text-base font-medium flex-1">
                    Add Classroom
                  </span>
                </NavLink>

                {/* edit classroom */}
              </li>
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="/edit-classroom" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">
                    Edit Classroom
                  </span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* student */}
          <li
            className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer px-2"
            onClick={toggleStudent}
          >
            <NavLink
              to="/student"
              activeClassName="active"
              className="flex items-center gap-x-4"
            >
              <PiStudentFill className="text-4xl block float-left" />
              <span className="text-base font-medium">Student</span>
            </NavLink>
            {studentOpen ? (
              <MdExpandLess className="text-xl hover:bg-slate-200 rounded-full" />
            ) : (
              <MdExpandMore className="text-xl hover:bg-slate-200 rounded-full" />
            )}
          </li>
          {studentOpen && (
            // sub menu
            <ul className="pl-6 space-y-3">
              {/* add student */}
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="/add-student" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">
                    Add Student
                  </span>
                </NavLink>
              </li>

              {/* edit student */}
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="#" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">
                    Edit Student
                  </span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* payment */}
          <li
            className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer px-2"
            onClick={togglePayment}
          >
            <NavLink
              to="/payment"
              activeClassName="active"
              className="flex items-center gap-x-4"
            >
              <MdOutlinePayment className="text-4xl block float-left" />
              <span className="text-base font-medium">Payment</span>
            </NavLink>
            {paymentOpen ? (
              <MdExpandLess className="text-xl hover:bg-slate-200 rounded-full" />
            ) : (
              <MdExpandMore className="text-xl hover:bg-slate-200 rounded-full" />
            )}
          </li>
          {paymentOpen && (
            // sub menu
            <ul className="pl-6 space-y-3">
              {/* fees */}
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="#" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">Fees</span>
                </NavLink>
              </li>

              {/* transport */}
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="#" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">
                    Transport
                  </span>
                </NavLink>
              </li>

              {/* hostel */}
              <li className="text-gray-500 hover:text-white text-sm flex items-center gap-x-4 cursor-pointer">
                <NavLink to="#" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">Hostel</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* support */}
          <li className="text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer px-2">
            <NavLink
              to="/support"
              activeClassName="active"
              className="flex items-center gap-x-4"
            >
              <MdHeadphones className="text-4xl block float-left" />
              <span className="text-base font-medium">Support</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* bottom */}
      <div className="text-gray-500 hover:text-red-500 text-sm flex gap-x-4 cursor-pointer px-2 items-center">
        {/* logout */}
        <MdLogout className="text-4xl block float-left" />
        <span className="text-base font-medium flex-1">Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
