import { NavLink, useNavigate, Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import "./header.css";
import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";

function Header() {
  // changing search text when search
  const { setSearchText } = useContext(ProductContext);
  const onSearchChange = ($e)=>{
    setSearchText($e.target.value)
  }
  // using navigate hook when clicking search button navigate to product page
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand bg-primary position-sticky top-0 z-3">
        <div className="container-fluid row ">
          <Link to={"/"} className={"navbar-brand col-1 text-center"}>
            <img src={logo} alt="logo" width={150} />
          </Link>
          {/* search box */}
          <form className={"d-flex col-6"} role="search">
            <input
              className={"form-control me-2"}
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={($e)=>{
                onSearchChange($e);
                navigate("/products")
              }}
            />
            <button className="btn btn-outline-light border-2" type="button" onClick={()=>{
              navigate('/products')
            }}>
              Search
            </button>
          </form>
          {/* navigation bar */}
          <ul className="col-4 m-0 navbar-nav justify-content-around align-items-center">
            <li className="nav-item">
              <NavLink to={"/"} className={"nav-text"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/products"} className={"nav-text"}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/aboutus"} className={"nav-text"}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contactus"} className={"nav-text"}>
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/cart"} className={"nav-text"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d={"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"} />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
