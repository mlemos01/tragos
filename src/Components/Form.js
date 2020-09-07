import React, { useContext } from "react";
import { CategoriasContext } from "../Context/CategoriasContext";

const Form = () => {
  //aplico destructuring para obtener los valores y le aplico el hook
  const { categorias } = useContext(CategoriasContext);
  console.log(categorias);
  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" className="form-control">
            <option value="">--Selecione categoria--</option>
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
