import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-md p-0 max-w-sm relative xs:w-72 xl:w-96">
        <div>
          {/* check circle icon */}
          <div className="bg-green-500 flex items-center justify-center xs:w-full xs:h-48 xl:w-96 xl:h-56">
            <BsCheck2Circle className="text-white mr-2 xs:text-8xl xl:text-9xl" />
          </div>

          {/* close button */}
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button onClick={onClose} className="focus:outline-none">
              <IoMdClose className="text-white text-3xl hover:text-slate-200" />
            </button>
          </div>
        </div>

        {/* thank you text */}
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-green-500 xs:my-2 xl:my-5">
            Thank You!
          </h2>
        </div>

        {/* submission received */}
        <div className="flex flex-col items-center justify-center px-4">
          {/* submission received text */}
          <p className="text-gray-700 text-center text-xl xs:mb-2 xl:mb-5">
            Your submission has been received.
          </p>

          {/* buttons */}
          <div className="flex gap-10 items-center justify-center w-full">
            {/* continue to edit page button */}
            <button className="w-full bg-blue-500 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-600 xs:mb-3 xl:mb-5">
              <NavLink to="/edit-classroom">Edit</NavLink>
            </button>

            {/* back to home button */}
            <button className="w-full bg-blue-500 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-600 xs:mb-3 xl:mb-5">
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
