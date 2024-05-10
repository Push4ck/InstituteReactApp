import { useState } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import ErrorPopup from "../ErrorPopup";
import SuccessPopup from "../SuccessPopup";

const AddClassroom = () => {
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    classRoomName: "",
    class: "",
    classRoomMode: "",
    price: "",
  });

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
    return;
  };

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <>
      <div className="w-full h-screen px-10 py-4">
        <div>
          <h1 className="text-xl font-bold">Add Class Room</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 p-10 my-10 rounded-xl bg-gray-100 shadow-md shadow-slate-300"
        >
          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
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

          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Class: <span className="text-red-500 text-base">*</span>
            </h1>
            <select
              name="class"
              value={formData.class}
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
              className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
            >
              <option value="">Select Class</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
              Class Room Mode: <span className="text-red-500 text-base">*</span>
            </h1>
            <select
              name="classRoomMode"
              value={formData.classRoomMode}
              onChange={(e) =>
                setFormData({ ...formData, classRoomMode: e.target.value })
              }
              className="rounded-md w-full h-12 px-2 border-2 focus:border-2 focus:border-sky-500"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div className="space-y-1">
            <h1 className="text-xl font-bold w-1/3">
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

          <button
            type="submit"
            className="bg-blue-500 text-xl text-white px-4 py-2 w-1/6 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

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

export default AddClassroom;
