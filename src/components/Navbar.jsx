import "../style/all.min.css";
import "../scripts/all.min.js";
import "../scripts/bootstrap.bundle.min.js";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid d-flex justify-content-between">
        <div className="brand-name">Mariam Atef </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-md-center">

            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            <li className="d-flex justify-content-md-between icons">
              <a href="https://github.com/MariamAtef226" target="_blank">
                <i className="hover-change fa-brands fa-github m-2"></i>
              </a>

              <a
                href="https://linkedin.com/in/mariam-atef-53a8031b1"
                target="_blank"
              >
                <i className="hover-change fa-brands fa-linkedin m-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
