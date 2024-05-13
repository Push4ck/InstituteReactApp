import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
// import BgImg from "../assets/logo.png";

const ErrorPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md p-0 max-w-sm relative">
        <div>
          {/* <img src={BgImg} alt="success-img" className="w-96 h-64" /> */}
          <div className="w-96 h-56 bg-red-500 flex items-center justify-center">
            <RxCrossCircled className="text-white text-9xl mr-2" />
          </div>

          {/* close button */}
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button onClick={onClose} className="focus:outline-none">
              <IoMdClose className="text-white text-3xl hover:text-slate-200" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          {/* success icon */}
          {/* <BsCheck2Circle className="text-green-500 text-7xl mr-2" /> */}
          {/* success text */}
          <h2 className="text-4xl my-5 font-bold text-red-500">Error</h2>
        </div>

        <div className="flex flex-col items-center px-4">
          {/* thankyou text */}
          <p className="text-gray-700 mb-5 text-center text-xl">
            To continue, please fill out the form completely.
          </p>

          {/* back to home button */}
          {/* <button className="w-full bg-blue-500 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-5">
            <NavLink to="/">Back to home</NavLink>
          </button> */}
        </div>
      </div>
    </div>
  );
};

ErrorPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ErrorPopup;
