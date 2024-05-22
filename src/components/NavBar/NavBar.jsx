import PropType from "prop-types";
import { FaBell, FaShareAlt } from "react-icons/fa";
import ChangeTheme from "../Theme/ChangeTheme";

const NavBar = ({ pagename }) => {
  return (
    <>
      <div className="w-full xs:px-2 xl:px-4 xl:py-6">
        <div className="flex items-center justify-between xs:h-12 xl:h-20">
          {/* title */}
          <div>
            <h1 className="xs:text-lg xl:text-4xl font-medium text-gray-700 dark:text-[#cecee6]">
              {pagename}
            </h1>
          </div>

          {/* buttons */}
          <div className="flex items-center xs:gap-3 xl:gap-4">
            {/* theme */}
            <div>
              <ChangeTheme />
            </div>

            {/* notification */}
            <div className="xs:text-lg xl:text-2xl rounded-full text-yellow-400 hover:text-yellow-500 cursor-pointer">
              <FaBell />
            </div>

            {/* share */}
            <div className="xs:text-lg xl:text-2xl rounded-full text-gray-400 hover:text-gray-500 cursor-pointer">
              <FaShareAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NavBar.PropType = {
  PageName: PropType.string.isRequired,
};

export default NavBar;
