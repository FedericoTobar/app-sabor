import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-outline fw-bold mb-4">Sobre nosotros</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              ipsam maiores qui, quaerat inventore harum totam perferendis.
              Quaerat natus repellendus eum voluptatibus laborum architecto quam
              dolor, quos minus sint doloribus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              ipsam maiores qui, quaerat inventore harum totam perferendis.
              Quaerat natus repellendus eum voluptatibus laborum architecto quam
              dolor, quos minus sint doloribus.
            </p>
            <NavLink to="/contact" className="btn btn-outline-dark px-3">Contacto</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
