import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md p-0 max-w-sm relative">
        <div>
          <div className="w-96 h-56 bg-green-500 flex items-center justify-center">
            <BsCheck2Circle className="text-white text-9xl mr-2" />
          </div>

          {/* close button */}
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button onClick={onClose} className="focus:outline-none">
              <IoMdClose className="text-white text-3xl hover:text-slate-200" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          <h2 className="text-4xl my-5 font-bold text-green-500">Thank You!</h2>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <p className="text-gray-700 mb-5 text-center text-xl">
            Your submission has been received.
          </p>

          <div className="flex gap-10 items-center justify-center w-full">
            {/* continue to edit page button */}
            <button className="w-full bg-blue-500 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5">
              <NavLink to="/edit-classroom">Edit</NavLink>
            </button>

            {/* back to home button */}
            <button className="w-full bg-blue-500 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5">
              <NavLink to="/">Home</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SuccessPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SuccessPopup;
