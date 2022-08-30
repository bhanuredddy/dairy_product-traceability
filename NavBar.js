import "../index.css";
import {Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div
        style={{
          height: "7vh",
          backgroundColor: "#c1e800",
          color: "white",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "monospace",
            fontSize: "4vh",
          }}
        >
          <Link className="lister" to="/">
            <div >Home</div>
          </Link>

          <Link className="lister" to="/Description">
            <div >About</div>
          </Link>

          <Link className="lister" to="/Manufacturer">
            <div>Manufaturer</div>
          </Link>

          <Link className="lister" to="/Distributer">
            <div >Distributer</div>
          </Link>

          <Link className="lister" to="/Retailer">
            <div >Retailer</div>
          </Link>

          <Link className="lister" to="/Enduser">
            <div >End-user</div>
          </Link>
          
          <Link className="lister" to="/Admin">
            <div >Admin</div>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
