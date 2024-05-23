import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import BrokenTv from "../../../assets/NotFound/broken-tv.png";

const NotFound = ({ setPagename, setProgress }) => {
  useEffect(() => {
    setPagename("404 Not Found");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setProgress]);

  return (
    <>
      <div className="w-full min-h-screen flex justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450] rounded-3xl">
        <div className="flex text-center justify-center xs:flex-col lg:flex-row">
          {/* 404 image */}
          <div>
            <img src={BrokenTv} alt="404" className="xs:w-68 lg:w-[600px]" />
          </div>

          {/* 404 text & link */}
          <div className="flex flex-col items-center justify-center">
            {/* 404 text */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
                Oops! Page not found.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-sky-500">
                {`Looks like you're lost in matrix!`}
              </p>
            </div>

            {/* back to home */}
            <NavLink to="/">
              <div>
                <a className="bg-slate-900 hover:bg-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg flex items-center justify-center xs:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                  Go back home
                </a>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

NotFound.propTypes = {
  setProgress: PropTypes.func.isRequired,
};

export default NotFound;
