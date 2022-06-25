import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div class="sidebar">
        <p class="lead">KEY PERFORMANCE INDICATOR</p>
        <Link to="/gender">
          {" "}
          <a class="active">Gender</a>
        </Link>
        <Link to="/employement">
          <a class="active">Employement type</a>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
