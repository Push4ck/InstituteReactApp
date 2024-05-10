import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/pages/Home";
import Classroom from "./components/pages/Classroom";
import AddClassroom from "./components/pages/AddClassroom";
// import EditClassroom from "./components/pages/EditClassroom";
import Student from "./components/pages/Student";
import AddStudent from "./components/pages/AddStudent";
import Payment from "./components/pages/Payment";
import Support from "./components/pages/Support";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/add-classroom" element={<AddClassroom />} />
            {/* <Route path="/edit-classroom" element={<EditClassroom />} /> */}
            <Route path="/student" element={<Student />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
