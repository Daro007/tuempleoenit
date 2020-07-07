import React from "react";
import Finanzas from "../Images/finanzas.svg";
import Ambiente from "../Images/ambiente-relajado.svg";
import Practico from "../Images/Practico.svg";

function WhyUs() {
  return (
    <div className="whyUs">
      <h1 className="whyUs-titulo"> ¿ Por qué nosotros ? </h1>
      <div className="razones">
        <div className="item">
          <div>
            <img src={Practico} alt="Practico" className="svg" />{" "}
          </div>
          <div>
            <h4 className="titulo-razones">Rápido y fácil </h4>
            <p className="parrafos-razones">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia,
              aliquet lacinia ligula ut vestibulum eros urna ullamcorper, cras
              sodales eleifend massa ac magna dictum.
            </p>
          </div>
        </div>
        <div className="item">
          <div>
            <img src={Ambiente} alt="Ambiente de Start-up" className="svg" />{" "}
          </div>
          <div>
            <h4 className="titulo-razones">Profesionales</h4>
            <p className="parrafos-razones">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia,
              aliquet lacinia ligula ut vestibulum eros urna ullamcorper, cras
              sodales eleifend massa ac magna dictum.
            </p>
          </div>
        </div>
        <div className="item">
          <div>
            <img src={Finanzas} alt="Grafico finanzas" className="svg" />{" "}
          </div>
          <div>
            <h4 className="titulo-razones">Claros y transparentes</h4>
            <p className="parrafos-razones">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia,
              aliquet lacinia ligula ut vestibulum eros urna ullamcorper, cras
              sodales eleifend massa ac magna dictum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
