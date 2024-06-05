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
          error.response ? error.response.data : error.message // prints error message or error data came from api
        );
      });
  };

  // input handler (onChange)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setShowErrorPopup(false);
    setShowSuccessPopup(false);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !data.ClassRoomName ||
      !data.Class ||
      !data.ClassRoomType ||
      data.Price < 0 ||
      !data.Price
    ) {
      setShowErrorPopup(true);
    } else {
      setClassRoomData();
    }
  };

  // price field validation
  const priceVal = ["e", "E", "+", "-", "."];

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450]">
      <div className="flex items-center xl:gap-10 xs:gap-0">
        {/* main content */}
        <div className="space-y-5">
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
            <form className="needs-validation w-full space-y-5">
              {/* classroom name */}
              <div>
                <label className="form-label dark:text-white">
                  ClassRoom Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ClassRoomName"
                  minLength={3}
                  maxLength={50}
                  value={data.ClassRoomName}
                  onChange={handleInputChange}
                  placeholder="ClassRoom Name"
                />
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  ClassRoom Name should be between 3-50
                </span>
              </div>

              {/* class */}
              <div>
                <label className="form-label dark:text-white">Class</label>
                <select
                  className="form-select cursor-pointer"
                  name="Class"
                  value={data.Class}
                  onChange={handleInputChange}
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
                <label className="form-label dark:text-white">
                  ClassRoom Type
                </label>
                <select
                  className="form-select cursor-pointer"
                  name="ClassRoomType"
                  value={data.ClassRoomType}
                  onChange={handleInputChange}
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
                <label className="form-label dark:text-white">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="Price"
                  value={data.Price}
                  onChange={handleInputChange}
                  onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
                  onKeyDown={(e) =>
                    priceVal.includes(e.key) && e.preventDefault()
                  }
                  placeholder="0"
                  required
                />
              </div>

              {/* submit button */}
              <div>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSubmit}
                >
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
      {showErrorPopup && <ErrorPopup />}
      {showSuccessPopup && <SuccessPopup />}
    </div>
  );
};

AddClassroom.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default AddClassroom;
