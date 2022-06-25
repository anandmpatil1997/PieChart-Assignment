import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
// import Navbar from "./components/Navbar";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import { useEffect, useState } from "react";
import axios from "axios";
import "./Chart.css";

// import Sidebar from "./components/Sidebar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
Chart.register(Tooltip, Title, ArcElement, Legend);
// const data = {
//   datasets: [{
//       data: [10, 20, 30],
//       backgroundColor:[
//         'red',
//         'blue',
//         'yellow'
//       ]
//   },
// ],
// // These labels appear in the legend and in the tooltips when hovering different arcs
// labels: [
//     'Red',
//     'Yellow',
//     'Blue'
// ],
// };

const Employeechart = () => {
  const [data1, setData1] = useState([]);
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "yellow"]
      }
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [`FULL TIME`, "PART TIME", "DAILY WAGES"]
  });

  useEffect(() => {
    axios
      .get("https://dd228w.sse.codesandbox.io/EMPLOYEES")
      .then((res) => {
        console.log(res.data);
        setData1(res.data);
        // const label = [];

        // const data = [];
        // for(var i of res.data){
        //   label.push(i.Employmenttype)
        //   data.push(i.id)

        // }
        // setData(
        //   {
        //     datasets: [{
        //         data:data,
        //         backgroundColor:[
        //           'red',
        //           'blue',
        //           'yellow'
        //         ]
        //     },
        //   ],
        //   labels:label,
        // }
        // )
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data1);
  let full = 0;
  let part = 0;
  let daily = 0;
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].Employmenttype === "FULL TIME") {
      full++;
    } else if (data1[i].Employmenttype === "PART TIME") {
      part++;
    } else {
      daily++;
    }
  }
  console.log(full + part + daily);
  useEffect(() => {
    setData({
      datasets: [
        {
          data: [full, part, daily],
          backgroundColor: ["red", "blue", "yellow"]
        }
      ],
      labels: ["FULL TIME", "PART TIME", "DAILY WAGES"]
    });
  }, [full, daily, part]);
  let total = full + part + daily;
  let f = Math.round((full / total) * 100) + "%";
  console.log(f);

  return (
    <div className="content">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="item">
              <p class="lead">KEY PERFORMANCE INDICATOR</p>
              <h1 class="display-6">Employement Type</h1>
            </div>
          </div>
          <div class="col-sm">
            <div className="item" style={{ margin: "auto" }}>
              <Pie data={data} />
            </div>
          </div>
          <div class="col-sm">
            <div className="item">
              <p class="lead">TOTAL EMPLOYEES = {total}</p>
              <p class="lead">FULL TIME = {full}</p>
              <p class="lead">PART TIME = {part}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Employeechart;
