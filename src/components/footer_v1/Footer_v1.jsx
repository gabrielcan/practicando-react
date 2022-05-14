import React from "react";
import "../footer_v1/footer_v1.css";
import { IoLogoGoogle, IoLogoPinterest, IoLogoWhatsapp } from "react-icons/io";

const Footer_v1 = () => {
  return (
    <div className="footer_Cont">
      <div className="footer_fila1">
        <div className="footer_cont_Logo_Rs">
          <div className="footer_cont_Texto">
            {" "}
            <h1 className="footer_text_logo">Web Gabriel</h1>
          </div>
          <div className="RSocial_cont">
            <div className="RSocial_icono">
              <IoLogoGoogle className="RSocial_Logo" />
            </div>
            <div className="RSocial_icono">
              <IoLogoPinterest className="RSocial_Logo" />
            </div>
            <div className="RSocial_icono">
              <IoLogoWhatsapp className="RSocial_Logo" />
            </div>
          </div>
        </div>

        <div className="footer_Cont_Listas">
          <ul className="list_Cont">
            <h5>Lista 1</h5>

            <li className="footer_item">
              <a className="footer_link" href="#">
                Inicio
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Galeria
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Portafolio
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Quienes somos
              </a>
            </li>
          </ul>

          <ul className="list_Cont">
            <h5>Lista 1</h5>

            <li className="footer_item">
              <a className="footer_link" href="#">
                Inicio
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Galeria
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Portafolio
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Quienes somos
              </a>
            </li>
          </ul>

          <ul className="list_Cont">
            <h5>Lista 1</h5>

            <li className="footer_item">
              <a className="footer_link" href="#">
                Inicio
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Galeria
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Portafolio
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="#">
                Quienes somos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_fila2">
        <div className="footer_cont_RS_Derech">
          <small> Copyrigt derechos de propiedad </small>

    
        </div>
        <div className="RSocial_cont">
            <div className="RSocial_icono">
              <IoLogoGoogle className="RSocial_Logo" />
            </div>
            <div className="RSocial_icono">
              <IoLogoPinterest className="RSocial_Logo" />
            </div>
            <div className="RSocial_icono">
              <IoLogoWhatsapp className="RSocial_Logo" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer_v1;
