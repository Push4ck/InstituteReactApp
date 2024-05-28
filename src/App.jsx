import LoadingBar from "react-top-loading-bar"; // top loading bar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // router dom
import { useState } from "react"; // hooks
// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./components/NavBar/NavBar"; // navbar
import SideBar from "./components/SideBar/SideBar"; // sidebar
// components -- pages
import Home from "./components/Pages/Home/Home"; // home page
import AddClassroom from "./components/Pages/Classroom/AddClassroom"; // add classroom page
import EditClassroom from "./components/Pages/Classroom/EditClassroom"; // edit classroom page
import AddStudent from "./components/Pages/Student/AddStudent"; // add student page
import EditStudent from "./components/Pages/Student/EditStudent"; // edit student
import Payment from "./components/Pages/Payment/Payment"; // payment page
import Support from "./components/Pages/Support/Support"; // support page
import NotFound from "./components/Pages/NotFound/NotFound"; // not found page

const App = () => {
  // top loading bar function
  const [progress, setProgress] = useState(0);

  // navbar pagename
  const [pagename, setPagename] = useState((setPagename) => {
    setPagename = { setPagename };
  });

  return (
    <Router>
      <div className="bg-[#ffffff] dark:bg-[#19173d]">
        {/* navbar */}
        <NavBar pagename={pagename} />

        {/* main div */}
        <div className="flex mt-14 xl:flex-row xs:flex-col">
          {/* sidebar */}
          <div className="xl:fixed">
            <SideBar />
          </div>

          {/* content box */}
          <div className="w-full min-h-screen xl:ml-56 xs:ml-0">
            {/* top loading bar */}
            <LoadingBar
              color="#0ea5e9"
              height={4}
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />

            {/* routing */}
            <Routes>
              {/* home page */}
              <Route
                path="/"
                element={
                  <Home setProgress={setProgress} setPagename={setPagename} />
                }
              />

              {/* add classroom page */}
              <Route
                path="/add-classroom"
                element={
                  <AddClassroom
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />

              {/* edit classroom page */}
              <Route
                path="/edit-classroom"
                element={
                  <EditClassroom
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />

              {/* add student page */}
              <Route
                path="/add-student"
                element={
                  <AddStudent
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />

              {/* edit student page */}
              <Route
                path="/edit-student"
                element={
                  <EditStudent
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />

              {/* payment page */}
              <Route
                path="/payment"
                element={
                  <Payment
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />

              {/* support page */}
              <Route
                path="/support"
                element={
                  <Support
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />

              {/* 404 -- not found page */}
              <Route
                path="*"
                element={
                  <NotFound
                    setProgress={setProgress}
                    setPagename={setPagename}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
