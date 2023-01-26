import "./Homepage.css";
import { Link } from "react-router-dom";
import userContext from "../Users/userContext";
import { useContext } from "react";

/** Renders the homepage.
 *
 * Props: none
 *
 * State: none
 *
 * App -> Homepage
 *
 * */
function Homepage() {
  const { user } = useContext(userContext);

  return (
    <section className="Homepage">
      <div className="Homepage-content">
        <h1 className="Homepage-title"> Jobly </h1>
        {!user && (
          <>
        <h2 className="Homepage-subtitle"> A job search engine like no other. </h2>
          <div className="d-flex justify-content-evenly">
            <Link className="btn btn-outline-light btn-lg opacity-75 m-4" to="/login">
              Log in
            </Link>
            <Link className="btn btn-outline-light btn-lg opacity-75 m-4" to="/signup">
              Sign up
            </Link>
          </div>
          </>
        )}
        {user && <h3 className="p-3 m-3">Welcome back, {user.username}!</h3>}
      </div>
    </section>
  );
}

export default Homepage;
