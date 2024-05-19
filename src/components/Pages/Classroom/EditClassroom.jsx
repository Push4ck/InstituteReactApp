import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

const EditClassroom = ({ setPagename, setProgress }) => {
  useEffect(() => {
    setPagename("Edit ClassRoom");
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 300);
  }, [setPagename, setProgress]);

  // const location = useLocation();
  // const [classroomData, setClassroomData] = useState({});

  // Effect to update classroomData when location state changes
  // useEffect(() => {
  //   console.log("Location state:", location.state);
  //   if (location.state) {
  //     setClassroomData(location.state);
  //   }
  // }, [location.state]);

  return (
    <div className="w-full min-h-screen px-4 gap-10 xl:py-10">
      {/* table */}
      <table className="table table-striped table-bordered table-light dark:table-dark">
        {/* table thread */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>

        {/* table body */}
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
  );
};

export default EditClassroom;
