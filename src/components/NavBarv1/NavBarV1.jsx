import React from "react";
import "../NavBarv1/navBarV1.css";
import { FaBeer } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";


const NavBarV1 = () => {
  return (
    <div className="cont_nav">
      <h1 className="nav_Titular"> Web Gabriel </h1>
   
      <nav className="cont_Menu">
        <ul className="cont_items">
          <li className="items">
            <a className="linck" href="#">
              <FcDepartment />
              INICIO
            </a>
          </li>
          <li className="items">
            <a className="linck" href="#">
              {" "}
              GALERIA
            </a>
          </li>
          <li className="items">
            <a className="linck" href="#">
              PORTAFOLIO
            </a>
          </li>
          <li className="items">
            <a className="linck" href="#">
              QUIENES SOMOS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarV1;
