// top loading bar
import LoadingBar from "react-top-loading-bar";

// router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// hooks
import { useState } from "react";

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

  return (
    <Router>
      <div className="flex xl:flex-row xs:flex-col">
        {/* sidebar */}
        <div className="xl:sticky">
          <SideBar />
        </div>

        {/* main content */}
        <div className="w-full">
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
            <Route path="/" element={<Home setProgress={setProgress} />} />
            {/* add classroom page */}
            <Route
              path="/add-classroom"
              element={<AddClassroom setProgress={setProgress} />}
            />
            {/* edit classroom page */}
            <Route
              path="/edit-classroom"
              element={<EditClassroom setProgress={setProgress} />}
            />
            {/* add student page */}
            <Route
              path="/add-student"
              element={<AddStudent setProgress={setProgress} />}
            />
            {/* payment page */}
            <Route
              path="/payment"
              element={<Payment setProgress={setProgress} />}
            />
            {/* support page */}
            <Route
              path="/support"
              element={<Support setProgress={setProgress} />}
            />
            {/* 404 -- not found page */}
            <Route path="*" element={<NotFound setProgress={setProgress} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
