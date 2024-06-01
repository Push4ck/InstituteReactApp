import PropTypes from "prop-types"; // prop type
import React, { useEffect, useState } from "react"; // react hooks
import MainImg from "../../../assets/Classroom/AddClassroomForm.svg"; // form image
// popups
import ErrorPopup from "../../validation/ErrorPopup"; // error popup
import SuccessPopup from "../../validation/SuccessPopup"; // success popup
import InstituteSoft from "../../ApiEndPoints/InstituteSoft"; // api's endpoint
import axios from "axios"; // axios (get : post)

const AddClassroom = ({ setProgress, setPagename }) => {
  // navbar + top loading bar
  useEffect(() => {
    setPagename("Add ClassRoom");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  // api's hook
  useEffect(() => {
    getActiveClass();
    getActiveClassRoomType();
  }, []);

  // dropdowns
  const [activeClass, setActiveClass] = useState([]);
  const [activeClassRoomType, setActiveClassRoomType] = useState([]);

  // initial data in form's input field
  const [data, setData] = useState({
    ClassRoomId: "",
    ClassRoomName: "",
    Class: "8th",
    ClassRoomType: "Online",
    Price: 0,
  });

  // initially hidden
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // class api (dropdown)
  const getActiveClass = () => {
    axios
      .get(InstituteSoft.BaseURL + InstituteSoft.ClassRoom.GetActiveClass)
      .then((response) => {
        setActiveClass(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // classroom type api (dropdown)
  const getActiveClassRoomType = () => {
    axios
      .get(
        InstituteSoft.BaseURL + InstituteSoft.ClassRoom.GetActiveClassRoomType // api's endpoint
      )
      .then((response) => {
        setActiveClassRoomType(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // classroom api
  const setClassRoomData = () => {
    const dataSet = {
      ClassRoomId: data.ClassRoomId,
      ClassRoomName: data.ClassRoomName,
      Class: data.Class,
      ClassRoomType: data.ClassRoomType,
      Price: parseFloat(data.Price),
    };

    console.log("Data sent to API => ", dataSet); // printing "data sent to API => " on console.

    // sending data to APIs endpoint using POST method
    axios
      .post(
        InstituteSoft.BaseURL + InstituteSoft.ClassRoom.SetClassRoom,
        dataSet // api's endpoint
      )
      .then((response) => {
        console.log(response.data);
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        console.error(
          "Error come from API:",
          error.response ? error.response.data : error.message // prints error message or error data came from api
        );
        setShowErrorPopup(true);
      });
  };

  // input handler (onChange)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // submit handler (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();
    setClassRoomData();
  };

  // error popup
  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  // success popup
  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450] rounded-3xl">
      <div className="flex items-center xl:gap-10 xs:gap-0">
        {/* main content */}
        <div className="space-y-10">
          {/* page head */}
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
              <div>
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
                  name="ClassRoomName"
                  onChange={handleInputChange}
                  placeholder="ClassRoom Name"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              {/* class */}
              <div>
                <label
                  htmlFor="validationCustom04"
                  className="form-label dark:text-white"
                >
                  Class
                </label>
                <select
                  className="form-select cursor-pointer"
                  id="validationCustom04"
                  name="Class"
                  onChange={handleInputChange}
                  required
                >
                  {activeClass.map((Class) => (
                    <option value={Class.className} key={Class.classId}>
                      {Class.className}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Please select a valid class.
                </div>
              </div>

              {/* classroom type */}
              <div>
                <label
                  htmlFor="validationCustom04"
                  className="form-label dark:text-white"
                >
                  ClassRoom Type
                </label>
                <select
                  className="form-select cursor-pointer"
                  id="validationCustom04"
                  name="ClassRoomType"
                  onChange={handleInputChange}
                  required
                >
                  {activeClassRoomType.map((Class) => (
                    <option
                      value={Class.classRoomTypeName}
                      key={Class.classRoomTypeId}
                    >
                      {Class.classRoomTypeName}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  Please select a valid type.
                </div>
              </div>

              {/* price */}
              <div>
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
                  name="Price"
                  onChange={handleInputChange}
                  placeholder="0"
                  required
                />
                <div className="invalid-feedback">
                  Please provide an amount.
                </div>
              </div>

              {/* submit button */}
              <div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* form image */}
        <div>
          <img
            src={MainImg}
            alt="Classroom"
            className="xl:block w-[600px] xxl:w-[1000px] xs:hidden"
          />
        </div>
      </div>

      {/* error & success popup */}
      {showErrorPopup && <ErrorPopup onClose={handleCloseErrorPopup} />}
      {showSuccessPopup && <SuccessPopup onClose={handleCloseSuccessPopup} />}
    </div>
  );
};

AddClassroom.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default AddClassroom;
