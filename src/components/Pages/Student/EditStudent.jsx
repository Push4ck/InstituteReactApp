import PropTypes from "prop-types"; // prop-types
import axios from "axios"; // axios
import InstituteSoft from "../../ApiEndPoints/InstituteSoft"; // api endpoint
import { useEffect, useState } from "react"; // hooks
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md"; // reacts-icons

// top loading bar & navbar name
const EditStudent = ({ setPagename, setProgress }) => {
  const [activeStudent, setActiveStudent] = useState([]);

  useEffect(() => {
    getActiveStudent();
  }, []);

  const getActiveStudent = () => {
    const apiGetData =
      InstituteSoft.BaseURL + InstituteSoft.Student.GetActiveStudent;
    axios
      .get(apiGetData)
      .then((response) => {
        setActiveStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setPagename("Edit Student");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450]">
      {/* table */}
      <table className="table table-striped table-bordered table-light dark:table-dark">
        {/* table head */}
        <thead>
          <tr key={""}>
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
          {activeStudent.map((Student, index) => (
            <tr key={Student.studentId}>
              <td>{index + 1}</td>
              <td>{Student.studentFirstName}</td>
              <td>{Student.fatherFirstName}</td>
              <td>{Student.fatherMobileNumber}</td>
              <td>{Student.classRoomName}</td>
              <td>{Student.address}</td>
              <td>{Student.remarks}</td>

              {/* actions */}
              <td className="space-x-4">
                {/* edit button */}
                <button className="text-xl">
                  <MdOutlineEdit />
                </button>

                {/* delete button */}
                <button className="text-xl">
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

EditStudent.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default EditStudent;
