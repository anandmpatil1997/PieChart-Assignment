import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
// import Navbar from "./components/Navbar";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import { useEffect, useState } from "react";
import axios from "axios";
import "./Chart.css";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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

const Genderchart = () => {
  const [data1, setData1] = useState([]);
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "yellow"]
      }
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [`MALE`, "FEMALE"]
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
  let males = 0;
  let females = 0;

  for (let i = 0; i < data1.length; i++) {
    if (data1[i].gender === "MALE") {
      males++;
    } else if (data1[i].gender === "FEMALE") {
      females++;
    }
  }
  console.log(males, females);
  useEffect(() => {
    setData({
      datasets: [
        {
          data: [males, females],
          backgroundColor: ["red", "blue"]
        }
      ],
      labels: ["MALE", "FEMALE"]
    });
  }, [males, females]);
  let total = males + females;
  console.log(total);
  // let f = Math.round((full / total) * 100) + '%';
  // console.log(f)

  return (
    <div className="content">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div className="item">
            <p class="lead">KEY PERFORMANCE INDICATOR</p>
            <h1 class="display-6">GENDER</h1>
          </div>
        </div>
        <div class="col-sm">
          <div className="item" style={{ margin:"auto" }}>
            <Pie data={data} />
          </div>
        </div>
        <div class="col-sm">
          <div className="item">
            <p class="lead">TOTAL EMPLOYEES = {total}</p>
            <p class="lead">MALE = {males}</p>
            <p class="lead">FEMALE = {females}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Genderchart;
