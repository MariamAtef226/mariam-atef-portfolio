import "../style/all.min.css";
import "../scripts/all.min.js";

export default function Contact() {
  return (
    <div className="contact d-flex align-items-center flex-column flex-md-row" id='contact'>
      <h1 className="pb-3 pb-md-0">Contact</h1>
      <div className="list">
        <div className="phone d-flex align-items-center">
          <i class="fa-solid fa-phone m-2"></i>
          +201060607202
        </div>
        <div className="email d-flex align-items-center">
          <i class="fa-solid fa-envelope m-2"></i>mariamatef226@gmail.com
        </div>
        <div className="github d-flex align-items-center">
          <i className="fa-brands fa-github m-2"></i>
          <a href="https://github.com/MariamAtef226">MariamAtef226</a>
        </div>
        <div className="linkedin d-flex align-items-center">
          <i className=" fa-brands fa-linkedin m-2"></i>
          <a href="https://www.linkedin.com/in/mariam-atef-53a8031b1/">
            Mariam Atef
          </a>
        </div>
      </div>
    </div>
  );
}
