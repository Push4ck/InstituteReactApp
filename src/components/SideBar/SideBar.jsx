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
// import { FaRegCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const SideBar = () => {
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
      <div className="flex bg-[#ffffff] dark:bg-[#19173d] w-full justify-between items-center xs:h-14 xl:h-0">
        <NavLink to="/">
          <h1 className="xl:hidden xs:block m-2 text-xl dark:text-white">
            Infinite Web Solutions
          </h1>
        </NavLink>

        {/* hamburger menu icon */}
        <button
          className="xl:hidden xs:block m-2 text-slate-950 dark:text-white text-3xl"
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
        className="offcanvas w-56 h-screen flex justify-evenly border-r-2 border-slate-700 dark:bg-gray-900 p-0 md:w-auto xs:flex xl:hidden"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="p-2">
          {/* sidebar header */}
          <div className="offcanvas-header p-2 mt-0 flex items-center">
            {/* company name */}
            <div
              className="offcanvas-title w-full"
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
                      Infinite Web Solutions
                    </h1>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* sidebar close button */}
            <button
              type="button"
              className="text-slate-950 dark:text-white text-xl"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* sidebar content */}
        <div className="h-[600px] p-4 pt-8 flex flex-col justify-between">
          {/* top */}
          <div>
            {/* sidebar links */}
            <ul className="space-y-3 flex flex-col items-start">
              {/* dashboard */}
              <li className="text-slate-700 dark:text-[#b0b0ca] flex items-center gap-x-4 cursor-pointer">
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdDashboard className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Dashboard</span>
                </NavLink>
              </li>

              {/* classroom */}
              <li
                className="text-slate-700 dark:text-[#b0b0ca] w-full justify-between flex items-center gap-x-4 cursor-pointer"
                onClick={toggleClassroom}
              >
                <NavLink
                  to="/ClassRoom"
                  activeclassname="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-[#e3e3e8]"
                >
                  <MdClass className="text-3xl block float-left" />
                  <span className="text-lg font-medium">ClassRoom</span>
                </NavLink>
                {classroomOpen ? (
                  <MdArrowDropUp className="text-4xl hover:text-[#e3e3e8] rounded-full" />
                ) : (
                  <MdArrowDropDown className="text-4xl hover:text-[#e3e3e8] rounded-full" />
                )}
              </li>
              {classroomOpen && (
                // sub menu
                <ul className="space-y-1 flex flex-col items-center w-full">
                  {/* add classroom */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                    <NavLink to="/AddClassRoom" activeclassname="active">
                      <span className="text-base font-medium flex-1">
                        Add Classroom
                      </span>
                    </NavLink>
                  </li>

                  {/* edit classroom */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                    <NavLink to="/EditClassRoom" activeclassname="active-link">
                      <span className="text-base font-medium flex-1">
                        Edit Classroom
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* student */}
              <li
                className="text-slate-700 w-full justify-between dark:text-[#b0b0ca] flex items-center gap-x-4 cursor-pointer"
                onClick={toggleStudent}
              >
                <NavLink
                  to="/Student"
                  activeclassname="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <PiStudentFill className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Student</span>
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
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-[#e3e3e8] cursor-pointer">
                    <NavLink to="/AddStudent" activeclassname="active-link">
                      <span className="text-base font-medium flex-1">
                        Add Student
                      </span>
                    </NavLink>
                  </li>

                  {/* edit student */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-[#e3e3e8] cursor-pointer">
                    <NavLink to="/EditStudent" activeclassname="active-link">
                      <span className="text-base font-medium flex-1">
                        Edit Student
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* payment */}
              <li
                className="text-slate-700 w-full justify-between dark:text-[#b0b0ca] flex items-center gap-x-4 cursor-pointer"
                onClick={togglePayment}
              >
                <NavLink
                  to="/Payment"
                  activeclassname="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdOutlinePayment className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Payment</span>
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
                    <NavLink to="/Fees" activeclassname="active-link">
                      <span className="text-base font-medium flex-1">Fees</span>
                    </NavLink>
                  </li>

                  {/* hostel */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                    <NavLink to="/Hostel" activeclassname="active-link">
                      <span className="text-base font-medium flex-1">
                        Hostel
                      </span>
                    </NavLink>
                  </li>

                  {/* transport */}
                  <li className="text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer">
                    <NavLink to="/Transport" activeclassname="active-link">
                      <span className="text-base font-medium flex-1">
                        Transport
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* support */}
              <li className="text-slate-700 dark:text-[#b0b0ca] flex items-center gap-x-4 cursor-pointer">
                <NavLink
                  to="/Support"
                  activeclassname="active"
                  className="flex items-center gap-x-2 hover:text-slate-950 dark:hover:text-white"
                >
                  <MdHeadphones className="text-3xl block float-left" />
                  <span className="text-lg font-medium">Support</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* bottom */}
          <div className="text-slate-700 dark:text-[#b0b0ca] hover:text-red-500 dark:hover:text-red-500 text-sm flex gap-x-2 cursor-pointer items-center">
            {/* logout */}
            <MdLogout className="text-3xl block float-left" />
            <span className="text-lg font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* sidebar for large screen devices */}
      <div className="min-h-screen bg-[#343a40] dark:bg-[#19173d] p-2 flex flex-col justify-between w-58 xs:hidden xl:flex">
        {/* top */}
        <div className="mt-4">
          {/* head */}
          {/* <div className="mb-4 flex items-center justify-between w-full h-24"> */}
          {/* image */}
          {/* <div>
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="company_logo"
                  className="border-4 border-slate-500 rounded-full w-16 object-cover"
                />
              </NavLink>
            </div> */}

          {/* text */}
          {/* <div>
              <NavLink to="/">
                <h1 className="text-lg text-white">Infinite Web Solutions</h1>
              </NavLink>
            </div> */}
          {/* </div> */}

          {/* links */}
          <div>
            {/* sidebar links */}
            <ul className="space-y-2 flex flex-col items-start">
              {/* dashboard */}
              <li
                className="text-white w-full flex items-center gap-x-4 cursor-pointer"
                activeclassname="active"
              >
                <NavLink to="/" className="flex items-center gap-x-4 p-2">
                  <MdDashboard className="text-2xl block float-left" />
                  <span className="text-lg">Dashboard</span>
                </NavLink>
              </li>

              {/* classroom */}
              <li
                className="text-white w-full flex items-center gap-x-4"
                onClick={toggleClassroom}
                activeclassname="active"
              >
                <div className="px-2 w-full space-x-4">
                  <MdClass className="text-2xl block float-left" />
                  <span className="text-lg cursor-pointer">ClassRoom</span>
                </div>
                {classroomOpen ? (
                  <MdArrowDropUp className="text-4xl cursor-pointer" />
                ) : (
                  <MdArrowDropDown className="text-4xl cursor-pointer" />
                )}
              </li>
              {classroomOpen && (
                // sub menu
                <ul className="flex flex-col items-center w-full">
                  {/* add classroom */}
                  <li
                    className="text-white w-full flex"
                    activeclassname="active"
                  >
                    <NavLink to="/AddClassRoom" className="p-1.5">
                      <span className="text-base">Add Classroom</span>
                    </NavLink>
                  </li>

                  {/* edit classroom */}
                  <li
                    className="text-white w-full flex"
                    activeclassname="active"
                  >
                    <NavLink to="/EditClassRoom" className="p-1.5">
                      <span className="text-base">Edit Classroom</span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* student */}
              <li
                className="text-white w-full flex items-center gap-x-4"
                onClick={toggleStudent}
                activeclassname="active"
              >
                <div className="px-2 w-full space-x-4">
                  <PiStudentFill className="text-2xl block float-left" />
                  <span className="text-lg cursor-pointer">Student</span>
                </div>
                {studentOpen ? (
                  <MdArrowDropUp className="text-4xl cursor-pointer" />
                ) : (
                  <MdArrowDropDown className="text-4xl cursor-pointer" />
                )}
              </li>
              {studentOpen && (
                // sub menu
                <ul className="flex flex-col items-center w-full">
                  {/* add student */}
                  <li
                    className="text-white cursor-pointer w-full flex"
                    activeclassname="active-link"
                  >
                    <NavLink to="/AddStudent" className="p-1.5">
                      <span className="text-base">Add Student</span>
                    </NavLink>
                  </li>

                  {/* edit student */}
                  <li
                    className="text-white cursor-pointer w-full flex"
                    activeclassname="active-link"
                  >
                    <NavLink to="/EditStudent" className="p-1.5">
                      <span className="text-base">Edit Student</span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* payment */}
              <li
                className="text-white w-full flex items-center gap-x-4"
                onClick={togglePayment}
                activeclassname="active"
              >
                <div className="px-2 w-full space-x-4">
                  <MdOutlinePayment className="text-2xl block float-left" />
                  <span className="text-lg cursor-pointer">Payment</span>
                </div>
                {paymentOpen ? (
                  <MdArrowDropUp className="text-4xl cursor-pointer" />
                ) : (
                  <MdArrowDropDown className="text-4xl cursor-pointer" />
                )}
              </li>
              {paymentOpen && (
                // sub menu
                <ul className="flex flex-col items-center w-full">
                  {/* fees */}
                  <li
                    className="text-white w-full flex"
                    activeclassname="active-link"
                  >
                    <NavLink to="/Fees" className="p-1.5">
                      <span className="text-base">Fees</span>
                    </NavLink>
                  </li>

                  {/* hostel */}
                  <li
                    className="text-white w-full flex"
                    activeclassname="active-link"
                  >
                    <NavLink to="/Hostel" className="p-1.5">
                      <span className="text-base">Hostel</span>
                    </NavLink>
                  </li>

                  {/* transport */}
                  <li
                    className="text-white w-full flex"
                    activeclassname="active-link"
                  >
                    <NavLink to="/Transport" className="p-1.5">
                      <span className="text-base">Transport</span>
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* support */}
              <li
                className="text-white w-full flex items-center gap-x-4"
                activeclassname="active"
              >
                <NavLink
                  to="/Support"
                  className="flex items-center gap-x-4 p-2"
                >
                  <MdHeadphones className="text-2xl block float-left" />
                  <span className="text-lg">Support</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="text-white hover:text-red-500 dark:hover:text-red-500 text-sm flex gap-x-4 mb-14 ml-1 cursor-pointer items-center">
          {/* logout */}
          <MdLogout className="text-2xl block float-left" />
          <span className="text-lg">Logout</span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
