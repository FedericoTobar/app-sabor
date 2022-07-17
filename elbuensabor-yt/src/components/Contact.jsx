import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Preguntas?</h1>
            <hr />
          </div>
        </div>
        {/* <div className="row">
                <div className="col-md-5">
                    <img src="" alt="" />
                </div>
                </div> */}
        <div className="col-md-6">
          <form>
          <div className="mb-3">
              <label htmlFor="exampleFormControl" className="form-label">
                Nombre Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControl"
                placeholder="Jon Snow"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark w-100 mt-5">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
