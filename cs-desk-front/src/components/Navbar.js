import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>CS Desk</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
}

export default Navbar;