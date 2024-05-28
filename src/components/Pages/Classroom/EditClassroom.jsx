import PropTypes from "prop-types"; // prop-types
// api
import axios from "axios";
import InstituteSoft from "../../ApiEndPoints/InstituteSoft";
import { useEffect, useState } from "react"; // hooks

// top loading bar & navbar name
const EditClassroom = ({ setPagename, setProgress }) => {
  // API
  const [activeClassRoom, setActiveClassRoom] = useState([]);

  useEffect(() => {
    getActiveClassRoom();
  }, []);

  const getActiveClassRoom = () => {
    const apiGetData =
      InstituteSoft.BaseURL + InstituteSoft.ClassRoom.GetActiveClassRoom;
    axios
      .get(apiGetData)
      .then((response) => {
        setActiveClassRoom(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setPagename("Edit ClassRoom");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center p-4 gap-10 bg-slate-200 dark:bg-[#262450] rounded-3xl">
      {/* table */}
      <table className="table table-striped table-bordered table-light dark:table-dark">
        {/* table thread */}
        <thead>
          <tr>
            <th scope="col">ClassRoomId</th>
            <th scope="col">ClassRoom Name</th>
            <th scope="col">Class</th>
            <th scope="col">ClassRoom Type</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          {activeClassRoom.map((classRoom, index) => (
            <tr key={classRoom.classRoomId}>
              <td>{index + 1}</td>
              <td>{classRoom.classRoomName}</td>
              <td>{classRoom.class}</td>
              <td>{classRoom.classRoomType}</td>
              <td>{classRoom.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

EditClassroom.propTypes = {
  setProgress: PropTypes.func.isRequired,
  setPagename: PropTypes.func.isRequired,
};

export default EditClassroom;
