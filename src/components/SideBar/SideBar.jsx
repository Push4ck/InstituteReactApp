// react lib
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/CompanyLogo/logo.png"; // logo

// react icons
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
      <div className="flex w-full justify-between items-center xs:h-14 xl:h-0">
        <NavLink to="/">
          <h1 className="xl:hidden xs:block m-2 text-xl dark:text-white">
            Company Name
          </h1>
        </NavLink>

        {/* hamburger menu icon */}
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
        class="offcanvas w-56 h-screen flex justify-evenly border-r-2 border-slate-700 dark:bg-gray-900 p-0 md:w-auto xs:flex xl:hidden"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="p-2">
          {/* sidebar header */}
          <div class="offcanvas-header p-2 mt-3 flex items-center">
            {/* company name */}
            <div
              class="offcanvas-title w-full"
              id="offcanvasWithBothOptionsLabel"
            >
              <div className="flex items-center w-full gap-2">
                {/* image */}
                <div>
                  <NavLink to="/">
                    <img
                      src={Logo}
                      alt="company_logo"
                      className="border-4 border-slate-500 rounded-full w-14 object-cover"
                    />
                  </NavLink>
                </div>

                {/* text */}
                <div>
                  <NavLink to="/">
                    <h1 className="text-xl text-slate-950 dark:text-white">
                      Company Name
                    </h1>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* sidebar close button */}
            <button
              type="button"
              class="text-slate-950 dark:text-white text-xl"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
          {/* separator */}
          <div className="border-t-2 border-slate-500 mt-2"></div>
        </div>

        {/* sidebar content */}
        <div class="h-[600px] p-4 pt-8 flex flex-col justify-between">
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
      <div className="min-h-screen p-3 flex flex-col justify-between w-64 xs:hidden xl:flex">
        {/* top */}
        <div className="">
          {/* head */}
          <div className="mb-4 flex items-center justify-between w-full h-32">
            {/* image */}
            <div>
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="company_logo"
                  className="border-4 border-slate-500 rounded-full w-16 object-cover"
                />
              </NavLink>
            </div>

            {/* text */}
            <div>
              <NavLink to="/">
                <h1 className="text-2xl text-slate-950 dark:text-[#cecee6]">
                  Company <br />
                  Name
                </h1>
              </NavLink>
            </div>
          </div>

          {/* links */}
          <div>
            {/* sidebar links */}
            <ul className="space-y-5 flex flex-col items-start">
              {/* dashboard */}
              <li className="text-slate-700 dark:text-[#b0b0ca] flex items-center gap-x-4 cursor-pointer">
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-[#e3e3e8]"
                >
                  <MdDashboard className="text-4xl block float-left" />
                  <span className="text-lg font-bold">Dashboard</span>
                </NavLink>
              </li>

              {/* classroom */}
              <li
                className="text-slate-700 dark:text-[#b0b0ca] w-full justify-between flex items-center gap-x-4 cursor-pointer"
                onClick={toggleClassroom}
              >
                <NavLink
                  to="/classroom"
                  activeClassName="active"
                  className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-[#e3e3e8]"
                >
                  <MdClass className="text-4xl block float-left" />
                  <span className="text-lg font-bold">ClassRoom</span>
                </NavLink>
                {classroomOpen ? (
                  <MdArrowDropUp className="text-4xl hover:text-[#e3e3e8] rounded-full" />
                ) : (
                  <MdArrowDropDown className="text-4xl hover:text-[#e3e3e8] rounded-full" />
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
                className="text-slate-700 dark:text-[#b0b0ca] w-full justify-between flex items-center gap-x-4 cursor-pointer"
                onClick={toggleStudent}
              >
                <NavLink
                  to="/student"
                  activeClassName="active"
                  className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-[#e3e3e8]"
                >
                  <PiStudentFill className="text-4xl block float-left" />
                  <span className="text-lg font-bold">Student</span>
                </NavLink>
                {studentOpen ? (
                  <MdArrowDropUp className="text-4xl hover:text-[#e3e3e8] rounded-full" />
                ) : (
                  <MdArrowDropDown className="text-4xl hover:text-[#e3e3e8] rounded-full" />
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
                className="text-slate-700 dark:text-[#b0b0ca] w-full justify-between flex items-center gap-x-4 cursor-pointer"
                onClick={togglePayment}
              >
                <NavLink
                  to="/payment"
                  activeClassName="active"
                  className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-[#e3e3e8]"
                >
                  <MdOutlinePayment className="text-4xl block float-left" />
                  <span className="text-lg font-bold">Payment</span>
                </NavLink>
                {paymentOpen ? (
                  <MdArrowDropUp className="text-4xl hover:text-[#e3e3e8] rounded-full" />
                ) : (
                  <MdArrowDropDown className="text-4xl hover:text-[#e3e3e8] rounded-full" />
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
              <li className="text-slate-700 dark:text-[#b0b0ca] flex items-center gap-x-4 cursor-pointer">
                <NavLink
                  to="/support"
                  activeClassName="active"
                  className="flex items-center gap-x-4 hover:text-slate-950 dark:hover:text-[#e3e3e8]"
                >
                  <MdHeadphones className="text-4xl block float-left" />
                  <span className="text-lg font-bold">Support</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="text-slate-700 dark:text-[#b0b0ca] hover:text-red-500 dark:hover:text-red-500 text-sm flex gap-x-4 mb-4 cursor-pointer items-center">
          {/* logout */}
          <MdLogout className="text-4xl block float-left" />
          <span className="text-lg font-bold">Logout</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
