import PropTypes from "prop-types"; // prop-types
// api
import axios from "axios";
import InstituteSoft from "../../ApiEndPoints/InstituteSoft";
import { useEffect, useState } from "react"; // hooks

// top loading bar & navbar name
const EditStudent = ({ setPagename, setProgress }) => {
  // API
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
        console.log(response.data);
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
        {/* table thread */}
        <thead>
          <tr>
            {/* <th scope="col">classRoomId</th> */}
            <th scope="col">Student Name</th>
            {/* <th scope="col">Student LastName</th> */}
            {/* <th scope="col">Mobile Number</th> */}
            {/* <th scope="col">Gender</th>
            <th scope="col">Dob</th> */}
            <th scope="col">Father Name</th>
            {/* <th scope="col">Father LastName</th> */}
            <th scope="col">Father Mobile Number</th>
            {/* <th scope="col">Mother FirstName</th> */}
            {/* <th scope="col">Mother LastName</th> */}
            {/* <th scope="col">Mother MobileNumber</th> */}
            <th scope="col">Class Room</th>
            <th scope="col">Address</th>
            {/* <th scope="col">Category</th> */}
            <th scope="col">Remarks</th>
            {/* <th scope="col">Photo</th> */}
            {/* <th scope="col">AvailingTransport</th>
            <th scope="col">AvailingSchool</th>
            <th scope="col">AvailingHostel</th>
            <th scope="col">Migration</th> */}
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          {activeStudent.map((Student, index) => (
            <tr key={getActiveStudent.studentId}>
              {/* <td>{index + 1}</td> */}
              <td>{Student.studentFirstName}</td>
              {/* <td>{Student.studentLastName}</td> */}
              {/* <td>{Student.mobileNumber}</td> */}
              {/* <td>{Student.gender}</td>
              <td>{Student.dob}</td> */}
              <td>{Student.fatherFirstName}</td>
              {/* <td>{Student.fatherLastName}</td> */}
              <td>{Student.fatherMobileNumber}</td>
              {/* <td>{Student.motherFirstName}</td>
              <td>{Student.motherLastName}</td>
              <td>{Student.motherMobileNumber}</td> */}
              <td>{Student.classRoomName}</td>
              <td>{Student.address}</td>
              {/* <td>{Student.category}</td> */}
              <td>{Student.remarks}</td>
              {/* <td>{Student.photo}</td> */}
              {/* <td>{Student.availingTransport}</td>
              <td>{Student.availingSchool}</td>
              <td>{Student.availingHostel}</td>
              <td>{Student.migration}</td> */}
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
