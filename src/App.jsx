import NavBar from "./components/NavBar/NavBar"; // navbar

import LoadingBar from "react-top-loading-bar"; // top loading bar

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // router dom

import { useState } from "react"; // hooks

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import SideBar from "./components/SideBar/SideBar"; // sidebar

// components -- pages
import Home from "./components/Pages/Home/Home"; // home page
import AddClassroom from "./components/Pages/Classroom/AddClassroom"; // add classroom page
import EditClassroom from "./components/Pages/Classroom/EditClassroom"; // edit classroom page
import AddStudent from "./components/Pages/Student/AddStudent"; // add student page
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
      <div className="flex bg-[#ffffff] dark:bg-[#19173d] xl:flex-row xs:flex-col">
        {/* sidebar */}
        <div className="xl:fixed">
          <SideBar />
        </div>

        {/* main content */}
        <div className="w-full p-2 xl:ml-64 xs:ml-0">
          {/* top loading bar */}
          <LoadingBar
            color="#0ea5e9"
            height={4}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          {/* navbar */}
          <NavBar pagename={pagename} />

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

            {/* payment page */}
            <Route
              path="/payment"
              element={
                <Payment setProgress={setProgress} setPagename={setPagename} />
              }
            />

            {/* support page */}
            <Route
              path="/support"
              element={
                <Support setProgress={setProgress} setPagename={setPagename} />
              }
            />

            {/* 404 -- not found page */}
            <Route
              path="*"
              element={
                <NotFound setProgress={setProgress} setPagename={setPagename} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
