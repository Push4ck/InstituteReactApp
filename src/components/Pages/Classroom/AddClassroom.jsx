import PropTypes from "prop-types"; // prop type
import { useEffect, useState } from "react"; // hooks
import MainImg from "../../../assets/Classroom/AddClassroomForm.svg"; // classroom image
// error and success modals
import ErrorPopup from "../../validation/ErrorPopup";
import SuccessPopup from "../../validation/SuccessPopup";
// instSoft
import InstituteSoft from "../../ApiEndPoints/InstituteSoft";
import axios from "axios";

// top progress bar
const AddClassroom = ({ setProgress, setPagename }) => {
  // class dropdown
  const [activeClass, setActiveClass] = useState([]);

  useEffect(() => {
    getActiveClass();
    getActiveClassRoomType();
  }, []);

  const getActiveClass = () => {
    const apiGetData =
      InstituteSoft.BaseURL + InstituteSoft.ClassRoom.GetActiveClass;
    axios
      .get(apiGetData)
      .then((response) => {
        setActiveClass(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // classRoomType dropdown
  const [activeClassRoomType, setActiveClassRoomType] = useState([]);

  const getActiveClassRoomType = () => {
    const apiGetData =
      InstituteSoft.BaseURL + InstituteSoft.ClassRoom.GetActiveClassRoomType;
    axios
      .get(apiGetData)
      .then((response) => {
        setActiveClassRoomType(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // top loading bar & navbar
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
                className="needs-validation w-full space-y-5"
                noValidate
                onSubmit={handleSubmit}
              >
                {/* classroom name */}
                <div className="">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label dark:text-white"
                  >
                    ClassRoom Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
                  <div className="valid-feedback">Looks good!</div>
                </div>

                {/* class */}
                <div className="">
                  <label
                    htmlFor="validationCustom04"
                    className="form-label dark:text-white"
                  >
                    Class
                  </label>
                  <select
                    className="form-select cursor-pointer"
                    id="validationCustom04"
                  >
                    {activeClass.map((Class) => (
                      <option
                        value={Class.classId}
                        name={Class.className}
                        key={Class.classId}
                      >
                        {Class.className}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>

                {/* classroom type */}
                <div className="">
                  <label
                    htmlFor="validationCustom04"
                    className="form-label dark:text-white"
                  >
                    ClassRoom Type
                  </label>
                  <select
                    className="form-select cursor-pointer"
                    id="validationCustom04"
                  >
                    {activeClassRoomType.map((Class) => {
                      return (
                        <option
                          value={Class.classRoomTypeId}
                          name={Class.classRoomTypeName}
                          key={Class.classRoomTypeId}
                        >
                          {Class.classRoomTypeName}
                        </option>
                      );
                    })}
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>

                {/* price */}
                <div className="">
                  <label
                    htmlFor="validationCustom05"
                    className="form-label dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom05"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    placeholder="30000"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a amount.
                  </div>
                </div>

                {/* submit button */}
                <div className="">
                  <button className="btn btn-primary" type="submit">
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
