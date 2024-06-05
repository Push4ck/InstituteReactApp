import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiUpload } from "react-icons/fi";
import ErrorPopup from "../../validation/ErrorPopup";
import SuccessPopup from "../../validation/SuccessPopup";
import MainImg from "../../../assets/Classroom/AddClassroomForm.svg"; // classroom image

const AddStudent = ({ setPagename, setProgress }) => {
  useEffect(() => {
    setPagename("Add Student");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // collecting input form data
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
    photo: "",
    availingTransport: false,
    availingSchool: false,
    availingHostel: false,
    migrated: false,
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  // photo change handler
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });

    // Generate preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormData(formData)) {
      console.log(formData);
    } else {
    }
  };

  // validation
  const validateFormData = (formData) => {
    const {
      studentFirstName,
      studentLastName,
      mobileNumber,
      gender,
      dob,
      fatherFirstName,
      fatherLastName,
      motherFirstName,
      motherLastName,
      motherMobileNumber,
      classroomName,
      address,
      category,
      remarks,
      photo,
      availingTransport,
      availingSchool,
      availingHostel,
      migrated,
    } = formData;

    // validating required fields
    if (
      !studentFirstName ||
      !studentLastName ||
      !mobileNumber ||
      !gender ||
      !dob ||
      !fatherFirstName ||
      !fatherLastName ||
      !motherFirstName ||
      !motherLastName ||
      !motherMobileNumber ||
      !classroomName ||
      !address ||
      !category ||
      !remarks ||
      !photo
    ) {
      return false; // show error popup
    }

    // validating checkboxes
    if (
      availingTransport === false ||
      availingSchool === false ||
      availingHostel === false ||
      migrated === false
    ) {
      return true; // show success popup
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450]">
        {/* main */}
        <div className="flex xl:gap-10 xs:gap-0">
          <div className="space-y-10">
            {/* head text */}
            <div className="space-y-4 md:ml-10 xs:ml-0">
              <p className="text-slate-500 text-lg">Say hello</p>
              <h1 className="dark:text-white text-6xl font-bold">
                Let's Work <span className="text-sky-500">Together</span>.
              </h1>
              <p className="dark:text-white text-lg font-medium">
                I'd love to meet up with you to discuss your venture, and
                potential collaborations.
              </p>
            </div>

            {/* form */}
            <div className="md:mx-10 xs:mx-0">
              <form
                className="needs-validation w-full space-y-5"
                noValidate
                onSubmit={handleSubmit}
              >
                {/* personal details */}
                <h1 className="text-slate-900 font-semibold text-center xs:text-xl lg:text-2xl dark:text-white">
                  Personal Details
                </h1>

                {/* student name */}
                <div className="space-y-1">
                  {/* heading */}
                  <h1 className="text-slate-900 font-small xs:text-lg lg:text-lg dark:text-white">
                    Student Name{" "}
                    <span className="text-red-500 text-base">*</span>
                  </h1>

                  {/* student details */}
                  <div className="flex items-center gap-4 justify-between">
                    {/* first name */}
                    <input
                      type="text"
                      name="studentFirstName"
                      value={formData.studentFirstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentFirstName: e.target.value,
                        })
                      }
                      className="w-full rounded-md h-10 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                      placeholder="First name"
                    />

                    {/* last name */}
                    <input
                      type="text"
                      name="studentLastName"
                      value={formData.studentLastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentLastName: e.target.value,
                        })
                      }
                      className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* mobile number */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Mobile Number{" "}
                    <span className="text-red-500 text-base">*</span>
                  </h1>

                  <input
                    type="number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mobileNumber: e.target.value,
                      })
                    }
                    className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
                    placeholder="mobile number"
                  />
                </div>

                {/* gender */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Gender <span className="text-base text-red-500">*</span>
                  </h1>

                  {/* select gender */}
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500 cursor-pointer"
                  >
                    {/* gender options */}
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* date of birth */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Date of Birth (DOB){" "}
                    <span className="text-base text-red-500">*</span>
                  </h1>

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500 cursor-pointer"
                  />
                </div>

                {/* father name */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Father Name{" "}
                    <span className="text-base text-red-500">*</span>
                  </h1>

                  {/* father details */}
                  <div className="flex items-center gap-4 justify-between">
                    {/* first name */}
                    <input
                      type="text"
                      name="fatherFirstName"
                      value={formData.fatherFirstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fatherFirstName: e.target.value,
                        })
                      }
                      className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                      placeholder="First name"
                    />

                    {/* last name */}
                    <input
                      type="text"
                      name="fatherLastName"
                      value={formData.fatherLastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fatherLastName: e.target.value,
                        })
                      }
                      className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* father mobile number */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Father Mobile Number{" "}
                    <span className="text-base text-red-500">*</span>
                  </h1>

                  <input
                    type="number"
                    name="fatherMobileNumber"
                    value={formData.fatherMobileNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherMobileNumber: e.target.value,
                      })
                    }
                    pattern="[0-9]{10}"
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                    placeholder="mobile number"
                  />
                </div>

                {/* additional details */}
                <h1 className="text-slate-900 font-semibold text-center xs:text-xl lg:text-2xl dark:text-white">
                  Additional Details:
                </h1>

                {/* mother name */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Mother Name{" "}
                    <span className="text-base text-red-500">*</span>
                  </h1>

                  {/* mother details */}
                  <div className="flex items-center gap-4 justify-between">
                    {/* first name */}
                    <input
                      type="text"
                      name="motherFirstName"
                      value={formData.motherFirstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          motherFirstName: e.target.value,
                        })
                      }
                      className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                      placeholder="First Name"
                    />

                    {/* last name */}
                    <input
                      type="text"
                      name="motherLastName"
                      value={formData.motherLastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          motherLastName: e.target.value,
                        })
                      }
                      className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* mother mobile number */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Mother Mobile Number{" "}
                    <span className="text-base text-red-500">*</span>
                  </h1>

                  <input
                    type="number"
                    name="motherMobileNumber"
                    value={formData.motherMobileNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherMobileNumber: e.target.value,
                      })
                    }
                    pattern="[0-9]{10}"
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                    placeholder="mobile number"
                  />
                </div>

                {/* classroom name */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Class Room Name{" "}
                    <span className="text-base text-red-500">*</span>
                  </h1>

                  <input
                    type="text"
                    name="classroomName"
                    value={formData.classroomName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        classroomName: e.target.value,
                      })
                    }
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                    placeholder="class room name"
                  />
                </div>

                {/* address */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Address <span className="text-base text-red-500">*</span>
                  </h1>

                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                    placeholder="Address"
                  />
                </div>

                {/* category */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Category <span className="text-base text-red-500">*</span>
                  </h1>

                  {/* select category */}
                  <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500 cursor-pointer"
                  >
                    {/* category options */}
                    <option value="">Select Category</option>
                    <option value="general">General</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                    <option value="obc">OBC</option>
                  </select>
                </div>

                {/* photo */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Photo <span className="text-base text-red-500">*</span>
                  </h1>

                  <div className="relative flex flex-col gap-2 items-center justify-center">
                    {/* Photo preview */}
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-14 h-14 rounded-lg"
                      />
                    )}

                    {/* File input */}
                    <div>
                      <label
                        htmlFor="photoInput"
                        className="bg-slate-100 text-slate-900 py-4 px-6 rounded-lg text-lg flex items-center justify-center cursor-pointer transition duration-300 hover:bg-slate-300 gap-2"
                      >
                        {photoPreview ? "Change Photo" : "Upload Photo"}

                        <input
                          type="file"
                          name="photo"
                          onChange={handlePhotoChange}
                          accept="image/*"
                          className="hidden"
                          id="photoInput"
                        />

                        <FiUpload className="" />
                      </label>

                      {/* Max file size */}
                      <p className="text-xs text-center text-slate-700 dark:text-slate-300 mt-2">
                        Max file size: 2MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* remarks */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Remarks <span className="text-base text-red-500">*</span>
                  </h1>

                  <input
                    type="text"
                    name="remarks"
                    value={formData.remarks}
                    onChange={(e) =>
                      setFormData({ ...formData, remarks: e.target.value })
                    }
                    className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
                    placeholder="Remarks"
                  />
                </div>

                {/* additional facility details */}
                <h1 className="text-slate-900 font-semibold text-center xs:text-xl lg:text-2xl dark:text-white">
                  Additional Facility Details:
                </h1>

                {/* transport */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
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
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            availingTransport: e.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="availingTransportYes"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
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
                        onChange={() =>
                          setFormData({
                            ...formData,
                            availingTransport: !formData.availingTransport,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="availingTransportNo"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* school */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Availing School{" "}
                    <span className="text-base text-red-500">*</span>
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
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            availingSchool: e.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="availingSchoolYes"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
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
                        onChange={() =>
                          setFormData({
                            ...formData,
                            availingSchool: !formData.availingSchool,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="availingSchoolNo"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* hostel */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
                    Availing Hostel{" "}
                    <span className="text-base text-red-500">*</span>
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
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            availingHostel: e.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="availingHostelYes"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
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
                        onChange={() =>
                          setFormData({
                            ...formData,
                            availingHostel: !formData.availingHostel,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="availingHostelNo"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* migrated */}
                <div className="space-y-1">
                  <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
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
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            migrated: e.target.checked,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="migratedYes"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
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
                        onChange={() =>
                          setFormData({
                            ...formData,
                            migrated: !formData.migrated,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="migratedNo"
                        className="ml-2 text-slate-900 font-semibold dark:text-white"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* submit button */}
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center xs:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* form page image */}
          <div>
            <img
              src={MainImg}
              alt=""
              className="xl:block w-[600px] xxl:w-[1000px] xs:hidden"
            />
          </div>
        </div>

        {/* Error Popup */}
        {showErrorPopup && <ErrorPopup onClose={handleCloseErrorPopup} />}

        {/* Success Popup */}
        {showSuccessPopup && <SuccessPopup onClose={handleCloseSuccessPopup} />}
      </div>
    </>
  );
};

AddStudent.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default AddStudent;
