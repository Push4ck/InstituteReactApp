import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { MdOutlineReportGmailerrorred } from "react-icons/md";
import MainImg from "../../../assets/Classroom/AddClassroomForm.svg";
import ErrorPopup from "../../validation/ErrorPopup";
import SuccessPopup from "../../validation/SuccessPopup";

const AddClassroom = ({ setProgress }) => {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setProgress]);

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // collecting input form data
  const [formData, setFormData] = useState({
    classRoomName: "",
    class: "",
    classRoomMode: "",
    price: "",
  });

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormData(formData)) {
      setShowSuccessPopup(true);
    } else {
      setShowErrorPopup(true);
    }
  };

  // validation
  const validateFormData = (formData) => {
    const { classRoomName, class: className, classRoomMode, price } = formData;
    // validating
    if (!classRoomName || !className || !classRoomMode || !price) {
      return false; // show error popup
    } else {
      console.log(formData);
      return true; // show success popup
    }
  };

  // closing error popup
  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  // closing success popup
  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 lg:px-20 py-2 xs:px-2">
        {/* <div>
          <h1 className="text-xl font-bold">Add Class Room</h1>
        </div> */}

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-8 p-10 my-10"
        >
          {/* class room name */}
          <div className="space-y-1">
            <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
              Class Room Name: <span className="text-red-500 text-base">*</span>
            </h1>

            <input
              type="text"
              name="classRoomName"
              value={formData.classRoomName}
              onChange={(e) =>
                setFormData({ ...formData, classRoomName: e.target.value })
              }
              className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="class room name"
            />
          </div>

          {/* class */}
          <div className="space-y-1">
            <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
              Class: <span className="text-red-500 text-base">*</span>
            </h1>

            <select
              name="class"
              value={formData.class}
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
              className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500 cursor-pointer"
            >
              <option value="">Select Class</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>

          {/* class room mode */}
          <div className="space-y-1">
            <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
              Class Room Mode: <span className="text-red-500 text-base">*</span>
            </h1>

            <select
              name="classRoomMode"
              value={formData.classRoomMode}
              onChange={(e) =>
                setFormData({ ...formData, classRoomMode: e.target.value })
              }
              className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500 cursor-pointer"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* price */}
          <div className="space-y-1">
            <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
              Price: <span className="text-red-500 text-base">*</span>
            </h1>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="rounded-md w-full h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
              placeholder="10000"
            />
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center xs:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          >
            Submit
          </button>
        </form>

        {/* form page image */}
        <div>
          <img src={MainImg} alt="" className="w-[900px]" />
        </div>

        {/* <div className="flex items-center gap-2">
          <MdOutlineReportGmailerrorred />
          <h1>
            Please fill all fields that have an asterisk (
            <span className="text-red-500">*</span>).
          </h1>
        </div> */}

        {/* Error Popup */}
        {showErrorPopup && <ErrorPopup onClose={handleCloseErrorPopup} />}

        {/* Success Popup */}
        {showSuccessPopup && <SuccessPopup onClose={handleCloseSuccessPopup} />}
      </div>
    </>
  );
};

AddClassroom.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default AddClassroom;
