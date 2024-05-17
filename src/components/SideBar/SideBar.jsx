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
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import ChangeTheme from "../Theme/ChangeTheme";

const SideBar = () => {
  // hamburger menu
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // sub menu
  const [classroomOpen, setClassroomOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);

  // revert classroom
  const toggleClassroom = () => {
    setClassroomOpen(!classroomOpen);
  };

  // revert payment
  const togglePayment = () => {
    setPaymentOpen(!paymentOpen);
  };

  // revert student
  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  };

  return (
    <>
      {/* hamburger sidebar for small screen devices */}
      <div className="flex w-full justify-between items-center dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800 xs:h-14 xl:h-0">
        <h1 className="xl:hidden xs:block m-2 text-xl dark:text-white">
          Company Name
        </h1>
        <button
          class="xl:hidden xs:block m-2 text-slate-950 dark:text-white text-3xl"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* sidebar for small screens */}
      <div
        class="offcanvas flex justify-between h-screen w-64 border-r-2 border-slate-700 md:w-auto xs:flex xl:hidden"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header dark:bg-slate-900 flex items-center justify-between gap-4">
          {/* company name */}
          <div
            class="offcanvas-title w-full"
            id="offcanvasWithBothOptionsLabel"
          >
            <div className="inline-flex items-center justify-between w-full">
              {/* text */}
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="company_logo"
                  className="border-4 border-slate-500 rounded-full w-20 object-cover"
                />
              </NavLink>

              {/* theme toggle */}
              <ChangeTheme />
            </div>
          </div>

          {/* sidebar close button */}
          <button
            type="button"
            class="text-slate-950 dark:text-white text-3xl"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        {/* sidebar content */}
        <div class="offcanvas-body dark:bg-gray-900 h-screen p-4 pt-8 flex flex-col justify-between">
          {/* top */}
          <div>
            {/* sidebar links */}
            <ul className="space-y-3 flex flex-col items-start">
              {/* dashboard */}
              <li className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer">
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdDashboard className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Dashboard</span>
                </NavLink>
              </li>

              {/* classroom */}
              <li
                className="text-slate-700 w-full justify-between dark:text-slate-500 flex items-center gap-x-4 cursor-pointer"
                onClick={toggleClassroom}
              >
                <NavLink
                  to="/classroom"
                  activeClassName="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdClass className="text-3xl block float-left" />
                  <span className="text-lg font-medium">ClassRoom</span>
                </NavLink>
                {classroomOpen ? (
                  <MdArrowDropUp className="text-4xl hover:bg-slate-200 rounded-full" />
                ) : (
                  <MdArrowDropDown className="text-4xl hover:bg-slate-200 rounded-full" />
                )}
              </li>
              {classroomOpen && (
                // sub menu
                <ul className="space-y-1 flex flex-col items-center w-full">
                  {/* add classroom */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                    <NavLink to="/add-classroom" activeClassName="active">
                      <span className="text-base font-medium flex-1">
                        Add Classroom
                      </span>
                    </NavLink>
                  </li>

                  {/* edit classroom */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
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
                className="text-slate-700 w-full justify-between dark:text-slate-500 flex items-center gap-x-4 cursor-pointer"
                onClick={toggleStudent}
              >
                <NavLink
                  to="/student"
                  activeClassName="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <PiStudentFill className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Student</span>
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
                      <span className="text-base font-medium flex-1">
                        Add Student
                      </span>
                    </NavLink>
                  </li>

                  {/* edit student */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                    <NavLink to="/edit-student" activeClassName="active-link">
                      <span className="text-base font-medium flex-1">
                        Edit Student
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* payment */}
              <li
                className="text-slate-700 w-full justify-between dark:text-slate-500 flex items-center gap-x-4 cursor-pointer"
                onClick={togglePayment}
              >
                <NavLink
                  to="/payment"
                  activeClassName="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdOutlinePayment className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Payment</span>
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
                      <span className="text-base font-medium flex-1">
                        Hostel
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* support */}
              <li className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer">
                <NavLink
                  to="/support"
                  activeClassName="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdHeadphones className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Support</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* bottom */}
          <div className="text-slate-700 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 text-sm flex gap-x-2 cursor-pointer items-center">
            {/* logout */}
            <MdLogout className="text-3xl block float-left" />
            <span className="text-lg font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* sidebar for large screen devices */}
      <div className="dark:bg-gray-900 h-screen p-4 pt-8 flex flex-col justify-between w-64 border-r-2 border-slate-700 xs:hidden xl:flex">
        {/* top */}
        <div className="">
          {/* head */}
          <div className="inline-flex items-center justify-between w-full mb-10">
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

          {/* links */}
          <div>
            {/* sidebar links */}
            <ul className="space-y-3 flex flex-col items-start">
              {/* dashboard */}
              <li className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer">
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
                className="text-slate-700 w-full justify-between dark:text-slate-500 flex items-center gap-x-4 cursor-pointer"
                onClick={toggleClassroom}
              >
                <NavLink
                  to="/classroom"
                  activeClassName="active"
                  className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdClass className="text-4xl block float-left" />
                  <span className="text-lg font-bold">ClassRoom</span>
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
                className="text-slate-700 w-full justify-between dark:text-slate-500 flex items-center gap-x-4 cursor-pointer"
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
                className="text-slate-700 w-full justify-between dark:text-slate-500 flex items-center gap-x-4 cursor-pointer"
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
                      <span className="text-base font-medium flex-1">
                        Hostel
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* support */}
              <li className="text-slate-700 dark:text-slate-500 flex items-center gap-x-4 cursor-pointer">
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
        </div>

        {/* bottom */}
        <div className="text-slate-700 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 text-sm flex gap-x-4 cursor-pointer items-center">
          {/* logout */}
          <MdLogout className="text-4xl block float-left" />
          <span className="text-lg font-bold">Logout</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
