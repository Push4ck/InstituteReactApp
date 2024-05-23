import PropTypes from "prop-types"; // prop type

import { useEffect, useState } from "react"; // hooks

import MainImg from "../../../assets/Classroom/AddClassroomForm.svg"; // classroom image

// error and success modals
import ErrorPopup from "../../validation/ErrorPopup";
import SuccessPopup from "../../validation/SuccessPopup";

// top progress bar
const AddClassroom = ({ setProgress, setPagename }) => {
  useEffect(() => {
    setPagename("Add ClassRoom");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  // error and success popups
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // collecting input form data
  const [formData, setFormData] = useState({
    classRoomName: "",
    class: "",
    classRoomType: "",
    price: "",
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
    const { classRoomName, class: className, classRoomType, price } = formData;
    // validating
    if (!classRoomName || !className || !classRoomType || !price) {
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
                {/* classroom name */}
                <div class="">
                  <label
                    for="validationCustom03"
                    class="form-label dark:text-white"
                  >
                    ClassRoom Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom03"
                    value={formData.classRoomName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        classRoomName: e.target.value,
                      })
                    }
                    placeholder="ClassRoom Name"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>

                {/* class */}
                <div class="">
                  <label
                    for="validationCustom04"
                    class="form-label dark:text-white"
                  >
                    Class
                  </label>
                  <select
                    class="form-select cursor-pointer"
                    id="validationCustom04"
                    value={formData.class}
                    onChange={(e) =>
                      setFormData({ ...formData, class: e.target.value })
                    }
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>10th</option>
                    <option>11th</option>
                    <option>12th</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>

                {/* classroom type */}
                <div class="">
                  <label
                    for="validationCustom04"
                    class="form-label dark:text-white"
                  >
                    ClassRoom Type
                  </label>
                  <select
                    class="form-select cursor-pointer"
                    id="validationCustom04"
                    value={formData.classRoomType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        classRoomType: e.target.value,
                      })
                    }
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>Online</option>
                    <option>Offline</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>

                {/* price */}
                <div class="">
                  <label
                    for="validationCustom05"
                    class="form-label dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="validationCustom05"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    placeholder="30000"
                    required
                  />
                  <div class="invalid-feedback">Please provide a amount.</div>
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

AddClassroom.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default AddClassroom;
