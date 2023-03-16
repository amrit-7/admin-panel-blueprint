import { Link } from "react-router-dom";
import "../notfound/notfound.scss";

const Forbidden = () => {
  return (
    <div className="notfound-body">
      <h1 className="notfound">
        Access Forbidden <i class="fa-regular fa-face-frown"></i>
      </h1>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">3</span>
        </span>
      </section>
      <div class="link-container">
        <Link to="/" class="more-link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default Forbidden;
