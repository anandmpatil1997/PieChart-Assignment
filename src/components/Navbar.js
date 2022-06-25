import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg "
      style={{ backgroundColor: "rgb(236, 236, 236)" }}
    >
      <div class="container">
        <a class="navbar-brand me-2" href="#">
          <img
            src="https://cdn1.vectorstock.com/i/thumb-large/99/95/construction-logo-design-letter-c-vector-27309995.jpg"
            height="50"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: "-3px" }}
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/">
                {" "}
                <a class="nav-link" href="#">
                  Dashboard
                </a>
              </Link>
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <a class="nav-link" href="#">
              USER NAME
            </a>
            <button type="button" class="btn btn-primary me-3">
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
