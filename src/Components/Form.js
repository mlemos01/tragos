import React, { useContext, useState } from "react";
import { CategoriasContext } from "../Context/CategoriasContext";
import { RecetasContext } from "../Context/RecetasContext";
const Form = () => {

  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: ""
  });

  //aplico destructuring para obtener los valores y le aplico el hook
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);


  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };


  const ejecutarBusqueda = (e) => {
    e.preventDefault();
    buscarRecetas(busqueda);
    guardarConsultar(true);
  };
  return (
    <form className="col-12"
      onSubmit={ejecutarBusqueda}>
      <fieldset className="text-center">
        <legend>Buscar tragos por Categoria o ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingredientes"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">--Selecione categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Trago"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
