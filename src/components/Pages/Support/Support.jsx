import { useEffect, useState } from "react"; // hooks

import PropTypes from "prop-types"; // prop-types

import ErrorPopup from "../../validation/ErrorPopup"; // errorPopup

import SuccessPopup from "../../validation/SuccessPopup"; // successPopup

import Help from "../../../assets/Support/help-and-support.svg"; // image

const Support = ({ setPagename, setProgress }) => {
  useEffect(() => {
    setPagename("Support");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

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
      setShowSuccessPopup(true); // show success popup
    } else {
      setShowErrorPopup(true); // show error popup
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
    <>
      <div className="w-full min-h-screen flex flex-col justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450] rounded-3xl">
        {/* main */}
        <div className="flex items-center xl:gap-10 xs:gap-0">
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
                class="needs-validation w-full space-y-5"
                novalidate
                onSubmit={handleSubmit}
              >
                {/* full name */}
                <div class="">
                  <label
                    for="validationCustom03"
                    class="form-label dark:text-white"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    placeholder="Full Name"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                {/* email */}
                <div class="">
                  <label
                    for="validationCustom03"
                    class="form-label dark:text-white"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="ClassRoom Name"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                {/* subject */}
                <div class="">
                  <label
                    for="validationCustom03"
                    class="form-label dark:text-white"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    placeholder="Subject"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                {/* message */}
                <div class="">
                  <label
                    for="validationCustom03"
                    class="form-label dark:text-white"
                  >
                    Message
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Message"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                {/* submit button */}
                <div class="">
                  <button class="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* form page image */}
          <div>
            <img
              src={Help}
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

Support.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default Support;
