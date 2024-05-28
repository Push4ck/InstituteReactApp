import PropType from "prop-types"; // prop-type
import { FaBell, FaShareAlt } from "react-icons/fa"; // react-icons
import ChangeTheme from "../Theme/ChangeTheme"; // theme change

const NavBar = ({ pagename }) => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg bg-[#ffffff] dark:bg-[#19173d]">
        <div class="container-md">
          {/* title */}
          <div>
            <h1 class="navbar-brand text-2xl text-slate-700 dark:text-[#b0b0ca]">
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
      </nav>
    </>
  );
};

NavBar.PropType = {
  PageName: PropType.string.isRequired,
};

export default NavBar;
