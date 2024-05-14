import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditClassroom = () => {
  const location = useLocation();
  const [classroomData, setClassroomData] = useState({});

  // Effect to update classroomData when location state changes
  useEffect(() => {
    console.log("Location state:", location.state);
    if (location.state) {
      setClassroomData(location.state);
    }
  }, [location.state]);

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">Classroom Data</h1>
        <table>
          <thead>
            <tr>
              <th>Class Room Name</th>
              <th>Class</th>
              <th>Class Room Mode</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{classroomData.classRoomName}</td>
              <td>{classroomData.class}</td>
              <td>{classroomData.classRoomMode}</td>
              <td>{classroomData.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EditClassroom;
