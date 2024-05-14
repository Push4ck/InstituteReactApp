import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Pages/Home/Home";
import AddClassroom from "./components/Pages/Classroom/AddClassroom";
import EditClassroom from "./components/Pages/Classroom/EditClassroom";
import AddStudent from "./components/Pages/Student/AddStudent";
import Payment from "./components/Pages/Payment/Payment";
import Support from "./components/Pages/Support/Support";
import NotFound from "./components/Pages/NotFound/NotFound";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className="flex">
        {/* sidebar */}
        <div className="fixed">
          <SideBar />
        </div>

        {/* main content */}
        <div className="ml-64 w-full">
          <LoadingBar
            color="#0ea5e9"
            height={4}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<Home setProgress={setProgress} />} />
            <Route
              path="/add-classroom"
              element={<AddClassroom setProgress={setProgress} />}
            />
            <Route
              path="/edit-classroom"
              element={<EditClassroom setProgress={setProgress} />}
            />
            <Route
              path="/add-student"
              element={<AddStudent setProgress={setProgress} />}
            />
            <Route
              path="/payment"
              element={<Payment setProgress={setProgress} />}
            />
            <Route
              path="/support"
              element={<Support setProgress={setProgress} />}
            />
            <Route path="*" element={<NotFound setProgress={setProgress} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
