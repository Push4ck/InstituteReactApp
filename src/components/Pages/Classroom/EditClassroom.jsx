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
      <div className="w-full min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 px-4 gap-10 xl:py-10">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EditClassroom;
