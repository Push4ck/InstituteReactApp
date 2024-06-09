import PropTypes from "prop-types"; // prop-types
import axios from "axios"; // axios
import InstituteSoft from "../../ApiEndPoints/InstituteSoft"; // api endpoint
import { useEffect, useState } from "react"; // hooks
import { useNavigate } from "react-router-dom"; // for navigation
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md"; // reacts-icons
import DeletePopup from "../../validation/DeletePopup"; // delete popup
import DeleteConfirmPopup from "../../validation/DeleteConfirmPopup"; // delete confirm popup

// top loading bar & navbar name
const EditStudent = ({ setPagename, setProgress }) => {
  const [activeStudent, setActiveStudent] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false); // delete sweet error
  const [showDeleteConfirmPopup, setShowDeleteConfirmPopup] = useState(false); // delete sweet error
  const [studentIdToDelete, setStudentIdToDelete] = useState(null); // deletion using ClassRoomId

  useEffect(() => {
    getActiveStudent();
  }, []);

  // data displaying from database
  const getActiveStudent = () => {
    const apiGetData =
      InstituteSoft.BaseURL + InstituteSoft.Student.GetActiveStudent; // api's endpoint
    axios
      .get(apiGetData)
      .then((response) => {
        setActiveStudent(response.data); // database data
      })
      .catch((error) => {
        console.log(error); // console error
        // showMessage("Failed to fetch data."); // toast error message
      });
  };

  useEffect(() => {
    setPagename("Edit Student");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  // edit
  const handleEdit = (studentId) => {
    navigate(`/AddStudent/${studentId}`);
  };

  // delete
  const handleDelete = (studentId) => {
    setStudentIdToDelete(studentId);
    setShowDeletePopup(true); // delete popup
  };

  // delete confirmation sweet alert modal
  const confirmDelete = () => {
    const apiDeleteData =
      InstituteSoft.BaseURL +
      InstituteSoft.Student.DeleteStudent.replace(
        "{0}",
        studentIdToDelete // api's endpoint
      );
    axios
      .get(apiDeleteData)
      .then((response) => {
        // console.log(response.data);
        getActiveStudent(); // Refresh the table data after deletion
        setShowDeletePopup(false);
        setShowDeleteConfirmPopup(true);
        // showSuccessMessage("Data Deleted Successfully!"); // toastify success message
      })
      .catch((error) => {
        // console.error(error);
        setShowDeletePopup(false);
        setShowDeleteConfirmPopup(false);
        // showMessage("Failed to delete classroom."); // toastify error message
      });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450]">
      <div className="w-full">
        {/* table */}
        <table className="table table-striped table-bordered theme-light">
          {/* table head */}
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Student Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Father Mobile Number</th>
              <th scope="col">Class Room</th>
              <th scope="col">Address</th>
              <th scope="col">Remarks</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {activeStudent.map((student, index) => (
              <tr key={student.studentId}>
                <td>{index + 1}</td>
                <td>{student.studentFirstName}</td>
                <td>{student.fatherFirstName}</td>
                <td>{student.fatherMobileNumber}</td>
                <td>{student.studentClassRoomName}</td>
                <td>{student.address}</td>
                <td>{student.remarks}</td>

                {/* actions */}
                <td className="space-x-4">
                  {/* edit button */}
                  <button
                    onClick={() => handleEdit(student.studentId)}
                    className="text-xl"
                  >
                    <MdOutlineEdit />
                  </button>

                  {/* delete button */}
                  <button
                    onClick={() => handleDelete(student.studentId)}
                    className="text-xl"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* delete popup */}
      {showDeletePopup && <DeletePopup onConfirm={confirmDelete} />}
      {showDeleteConfirmPopup && <DeleteConfirmPopup />}
    </div>
  );
};

EditStudent.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default EditStudent;
