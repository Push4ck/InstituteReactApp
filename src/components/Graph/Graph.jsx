import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import onlineStudentData from "../../onlineStudentData.json";
import offlineStudentData from "../../offlineStudentData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Graph = () => {
  return (
    <>
      <div className="h-[250px] p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <Line
          data={{
            labels: onlineStudentData.map((data) => data.label),
            datasets: [
              {
                label: "online student",
                data: onlineStudentData.map((data) => data.student),
                backgroundColor: "#3b82f6",
                borderColor: "#3b82f6",
              },
              {
                label: "offline student",
                data: offlineStudentData.map((data) => data.student),
                backgroundColor: "#f59e0b",
                borderColor: "#f59e0b",
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Graph;
