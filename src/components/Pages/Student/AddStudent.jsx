import { useState } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import ErrorPopup from "../../validation/ErrorPopup";
import SuccessPopup from "../../validation/SuccessPopup";

const AddStudent = () => {
  // form data
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    mobileNumber: "",
    gender: "",
    dob: "",
    fatherFirstName: "",
    fatherLastName: "",
    fatherMobileNumber: "",
    motherFirstName: "",
    motherLastName: "",
    motherMobileNumber: "",
    classroomName: "",
    address: "",
    category: "",
    remarks: "",
    photo: null,
    availingTransport: false,
    availingSchool: false,
    availingHostel: false,
    migrated: false,
  });

  //   changing field
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  //   submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFormData(formData)) {
      setShowSuccessPopup(true);
    } else {
      setShowErrorPopup(true);
    }
  };

  const validateFormData = (formData) => {
    console.log(formData);
    // Add your validation logic here
    return true; // For demonstration, always returning true
  };

  return (
    <>
      <div className="w-full px-10 py-4">
        {/* top */}
        <div>
          <h1 className="text-xl font-bold">Add Student</h1>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 p-10 my-10 rounded-xl bg-gray-100 shadow-md shadow-slate-300"
        >
          {/* personal details */}
          <h1 className="text-xl font-bold">Personal Details:</h1>

          {/* student name */}
          <div className="space-y-1">
            {/* heading */}
            <h1 className="text-xl font-bold w-1/3">
              Student Name <span className="text-red-500 text-base">*</span>
            </h1>

            {/* input fields */}
            <div className="flex items-center gap-4 justify-between">
              {/* first name */}
              <input
                type="text"
                name="studentFirstName"
                value={formData.studentFirstName}
                onChange={handleChange}
                className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                placeholder="First name"
              />

              {/* last name */}
              <input
                type="text"
                name="studentLastName"
                value={formData.studentLastName}
                onChange={handleChange}
                className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* mobile number */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Mobile Number <span className="text-red-500 text-base">*</span>
            </h1>

            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="mobile number"
            />
          </div>

          {/* gender */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Gender <span className="text-base text-red-500">*</span>
            </h1>

            {/* select dropdown */}
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            >
              {/* options */}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* date of birth */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Date of Birth (DOB){" "}
              <span className="text-base text-red-500">*</span>
            </h1>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            />
          </div>

          {/* father name */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold w-1/3">
              Father Name <span className="text-base text-red-500">*</span>
            </h1>

            {/* input fields */}
            <div className="flex items-center gap-4 justify-between">
              {/* first name */}
              <input
                type="text"
                name="fatherFirstName"
                value={formData.fatherFirstName}
                onChange={handleChange}
                className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                placeholder="First name"
              />

              {/* last name */}
              <input
                type="text"
                name="fatherLastName"
                value={formData.fatherLastName}
                onChange={handleChange}
                className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* father mobile number */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Father Mobile Number{" "}
              <span className="text-base text-red-500">*</span>
            </h1>
            <input
              type="tel"
              name="fatherMobileNumber"
              value={formData.fatherMobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="mobile number"
            />
          </div>

          {/* additional details */}
          <h1 className="text-xl font-bold mt-10">Additional Details:</h1>

          {/* mother name */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Mother Name <span className="text-base text-red-500">*</span>
            </h1>

            <div className="flex items-center gap-4 justify-between">
              {/* first name */}
              <input
                type="text"
                name="motherFirstName"
                value={formData.motherFirstName}
                onChange={handleChange}
                className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                placeholder="First Name"
              />

              {/* last name */}
              <input
                type="text"
                name="motherLastName"
                value={formData.motherLastName}
                onChange={handleChange}
                className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* mother mobile number */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Mother Mobile Number{" "}
              <span className="text-base text-red-500">*</span>
            </h1>
            <input
              type="tel"
              name="motherMobileNumber"
              value={formData.motherMobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="mobile number"
            />
          </div>

          {/* classroom name */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Class Room Name <span className="text-base text-red-500">*</span>
            </h1>
            <input
              type="text"
              name="classroomName"
              value={formData.classroomName}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="class room name"
            />
          </div>

          {/* address */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Address <span className="text-base text-red-500">*</span>
            </h1>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="Address"
            />
          </div>

          {/* category */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Category <span className="text-base text-red-500">*</span>
            </h1>

            {/* select dropdown */}
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            >
              {/* options */}
              <option value="general">General</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="obc">OBC</option>
            </select>
          </div>

          {/* photo */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Photo <span className="text-base text-red-500">*</span>
            </h1>

            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handleChange}
              accept="image/*"
              className="bg-slate-200 border-2 border-slate-300 py-2 px-4 rounded-md shadow-sm hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* remarks */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Remarks <span className="text-base text-red-500">*</span>
            </h1>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="Remarks"
            />
          </div>

          {/* additional facility details */}
          <h1 className="text-xl font-bold mt-10">
            Additional Facility Details:
          </h1>

          {/* transport */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Availing Transport{" "}
              <span className="text-base text-red-500">*</span>
            </h1>

            {/* transport checkbox buttons */}
            <div className="flex items-center gap-4">
              {/* yes */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availingTransport"
                  id="availingTransportYes"
                  checked={formData.availingTransport}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="availingTransportYes" className="ml-2">
                  Yes
                </label>
              </div>

              {/* no */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availingTransport"
                  id="availingTransportNo"
                  checked={!formData.availingTransport}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="availingTransportNo" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* school */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Availing School <span className="text-base text-red-500">*</span>
            </h1>

            {/* school checkbox buttons */}
            <div className="flex items-center gap-4">
              {/* yes */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availingSchool"
                  id="availingSchoolYes"
                  checked={formData.availingSchool}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="availingSchoolYes" className="ml-2">
                  Yes
                </label>
              </div>

              {/* no */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availingSchool"
                  id="availingSchoolNo"
                  checked={!formData.availingSchool}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="availingSchoolNo" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* hostel */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Availing Hostel <span className="text-base text-red-500">*</span>
            </h1>

            {/* hostel checkbox buttons */}
            <div className="flex items-center gap-4">
              {/* yes */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availingHostel"
                  id="availingHostelYes"
                  checked={formData.availingHostel}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="availingHostelYes" className="ml-2">
                  Yes
                </label>
              </div>

              {/* no */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="availingHostel"
                  id="availingHostelNo"
                  checked={!formData.availingHostel}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="availingHostelNo" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* migrated */}
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-full">
              Migrated (HBSE to CBSE / CBSE to HBSE){" "}
              <span className="text-base text-red-500">*</span>
            </h1>

            {/* migrated checkbox buttons */}
            <div className="flex items-center gap-4">
              {/* yes */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="migrated"
                  id="migratedYes"
                  checked={formData.migrated}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="migratedYes" className="ml-2">
                  Yes
                </label>
              </div>

              {/* no */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="migrated"
                  id="migratedNo"
                  checked={!formData.migrated}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label htmlFor="migratedNo" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-xl text-white px-4 py-2 w-1/6 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {/* bottom */}
        <div className="flex items-center gap-2">
          <MdOutlineReportGmailerrorred />
          <h1>
            Please fill all fields that have an asterisk (
            <span className="text-red-500">*</span>).
          </h1>
        </div>

        {/* Error Popup */}
        {showErrorPopup && <ErrorPopup onClose={handleCloseErrorPopup} />}

        {/* Success Popup */}
        {showSuccessPopup && <SuccessPopup onClose={handleCloseSuccessPopup} />}
      </div>
    </>
  );
};

export default AddStudent;
