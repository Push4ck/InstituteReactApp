import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {
  MdDashboard,
  MdClass,
  MdOutlinePayment,
  MdHeadphones,
  MdArrowDropDown,
  MdArrowDropUp,
  MdLogout,
} from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import ChangeTheme from "../Theme/ChangeTheme";

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
    <div className="dark:bg-gray-900 h-screen p-4 pt-8 flex flex-col justify-between w-64 border-r-2 border-slate-700">
      {/* top */}
      <div className="inline-flex items-center justify-between">
        {/* text */}
        <NavLink to="/">
          {/* <h1 className="text-3xl font-bold text-slate-950 dark:text-white ml-4">
            Logo
          </h1> */}

          <img
            src={Logo}
            alt="company_logo"
            className="border-4 border-slate-500 rounded-full w-28 object-cover"
          />
        </NavLink>

        {/* theme toggle */}
        <ChangeTheme />
      </div>

      {/* mid */}
      <div>
        {/* sidebar links */}
        <ul className="space-y-5 flex flex-col items-start">
          {/* dashboard */}
          <li className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer px-2">
            <NavLink
              to="/"
              activeClassName="active"
              className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-white"
            >
              <MdDashboard className="text-4xl block float-left" />
              <span className="text-lg font-bold">Dashboard</span>
            </NavLink>
          </li>

          {/* classroom */}
          <li
            className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer px-2"
            onClick={toggleClassroom}
          >
            <NavLink
              to="/classroom"
              activeClassName="active"
              className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-white"
            >
              <MdClass className="text-4xl block float-left" />
              <span className="text-lg font-bold">Class Room</span>
            </NavLink>
            {classroomOpen ? (
              <MdArrowDropUp className="text-4xl hover:bg-slate-200 rounded-full" />
            ) : (
              <MdArrowDropDown className="text-4xl hover:bg-slate-200 rounded-full" />
            )}
          </li>
          {classroomOpen && (
            // sub menu
            <ul className="space-y-3 flex flex-col items-center w-full">
              {/* add classroom */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/add-classroom" activeClassName="active">
                  <span className="text-lg font-medium flex-1">
                    Add Classroom
                  </span>
                </NavLink>

                {/* edit classroom */}
              </li>

              {/* edit classroom */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/edit-classroom" activeClassName="active-link">
                  <span className="text-lg font-medium flex-1">
                    Edit Classroom
                  </span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* student */}
          <li
            className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer px-2"
            onClick={toggleStudent}
          >
            <NavLink
              to="/student"
              activeClassName="active"
              className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-white"
            >
              <PiStudentFill className="text-4xl block float-left" />
              <span className="text-lg font-bold">Student</span>
            </NavLink>
            {studentOpen ? (
              <MdArrowDropUp className="text-4xl hover:bg-slate-200 rounded-full" />
            ) : (
              <MdArrowDropDown className="text-4xl hover:bg-slate-200 rounded-full" />
            )}
          </li>
          {studentOpen && (
            // sub menu
            <ul className="space-y-3 flex flex-col items-center w-full">
              {/* add student */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/add-student" activeClassName="active-link">
                  <span className="text-lg font-medium flex-1">
                    Add Student
                  </span>
                </NavLink>
              </li>

              {/* edit student */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/edit-student" activeClassName="active-link">
                  <span className="text-lg font-medium flex-1">
                    Edit Student
                  </span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* payment */}
          <li
            className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer px-2"
            onClick={togglePayment}
          >
            <NavLink
              to="/payment"
              activeClassName="active"
              className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-white"
            >
              <MdOutlinePayment className="text-4xl block float-left" />
              <span className="text-lg font-bold">Payment</span>
            </NavLink>
            {paymentOpen ? (
              <MdArrowDropUp className="text-4xl hover:bg-slate-200 rounded-full" />
            ) : (
              <MdArrowDropDown className="text-4xl hover:bg-slate-200 rounded-full" />
            )}
          </li>
          {paymentOpen && (
            // sub menu
            <ul className="space-y-3 flex flex-col items-center w-full">
              {/* fees */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/fees" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">Fees</span>
                </NavLink>
              </li>

              {/* transport */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/transport" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">
                    Transport
                  </span>
                </NavLink>
              </li>

              {/* hostel */}
              <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                <NavLink to="/hostel" activeClassName="active-link">
                  <span className="text-base font-medium flex-1">Hostel</span>
                </NavLink>
              </li>
            </ul>
          )}

          {/* support */}
          <li className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer px-2">
            <NavLink
              to="/support"
              activeClassName="active"
              className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-white"
            >
              <MdHeadphones className="text-4xl block float-left" />
              <span className="text-lg font-bold">Support</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* bottom */}
      <div className="text-slate-700 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 text-sm flex gap-x-4 cursor-pointer px-2 items-center">
        {/* logout */}
        <MdLogout className="text-4xl block float-left" />
        <span className="text-lg font-bold">Logout</span>
      </div>
    </div>
  );
};

export default SideBar;
