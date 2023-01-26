import { Link } from "react-router-dom";

/* Renders a 404 page. */
function NotFound() {
  return (
    <div className="NotFound d-flex flex-column align-items-center justify-content-center mt-5">
      <h3>Error 404: Page not found</h3>
      <h3>
        <Link to="/">Go Home</Link>
      </h3>
    </div>
  );
}

export default NotFound;
