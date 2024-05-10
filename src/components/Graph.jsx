import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import onlineStudentData from "../onlineStudentData.json";
import offlineStudentData from "../offlineStudentData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Graph = () => {
  return (
    <>
      <div className="h-[250px]">
        <Line
          data={{
            labels: onlineStudentData.map((data) => data.label),
            datasets: [
              {
                label: "online student",
                data: onlineStudentData.map((data) => data.student),
                backgroundColor: "#8b5cf6",
                borderColor: "#8b5cf6",
              },
              {
                label: "offline student",
                data: offlineStudentData.map((data) => data.student),
                backgroundColor: "#d9f99d",
                borderColor: "#d9f99d",
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Graph;
