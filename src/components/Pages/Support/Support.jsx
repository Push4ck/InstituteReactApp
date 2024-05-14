import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ErrorPopup from "../../validation/ErrorPopup";
import SuccessPopup from "../../validation/SuccessPopup";
import Help from "../../../assets/Support/help-and-support.svg";

const Support = ({ setProgress }) => {
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
    fullName: "",
    email: "",
    subject: "",
    message: "",
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
    const { fullName, email, subject, message } = formData;
    // validating
    if (!fullName || !email || !subject || !message) {
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
    <div className="w-full min-h-screen flex items-center dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 lg:px-20 py-2 xs:px-2">
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-8 p-10 my-10"
      >
        {/* full name */}
        <div className="space-y-1">
          <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
            Full Name: <span className="text-red-500 text-base">*</span>
          </h1>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full rounded-md h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            placeholder="Joe Doe"
          />
        </div>

        {/* email */}
        <div className="space-y-1">
          <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
            Email: <span className="text-red-500 text-base">*</span>
          </h1>

          <input
            type="email"
            name="price"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="rounded-md w-full h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            placeholder="example@gmail.com"
          />
        </div>

        {/* subject */}
        <div className="space-y-1">
          <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
            Subject: <span className="text-red-500 text-base">*</span>
          </h1>

          <input
            type="text"
            name="price"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="rounded-md w-full h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            placeholder="Enter subject"
          />
        </div>

        {/* message */}
        <div className="space-y-1">
          <h1 className="text-slate-900 font-semibold xs:text-lg lg:text-xl dark:text-white">
            Message: <span className="text-red-500 text-base">*</span>
          </h1>

          <input
            type="text"
            name="price"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="rounded-md w-full h-12 px-2 outline-none border-2 focus:border-2 focus:border-sky-500"
            placeholder="Enter message"
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
        <img src={Help} alt="" className="w-[900px]" />
      </div>

      {/* Error Popup */}
      {showErrorPopup && <ErrorPopup onClose={handleCloseErrorPopup} />}

      {/* Success Popup */}
      {showSuccessPopup && <SuccessPopup onClose={handleCloseSuccessPopup} />}
    </div>
  );
};

Support.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default Support;
