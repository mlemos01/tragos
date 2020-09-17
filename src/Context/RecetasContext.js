import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [infoReceta, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: ""
  });
  const [consultar, guardarConsultar] = useState(false);
  const { nombre, categoria } = busqueda;

  useEffect(() => {
    console.log("entre al useEffect recetas context")
    if (consultar) {
      console.log("consultar true" + nombre + categoria)
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultadoBusqueda = await Axios.get(url);
        console.log(resultadoBusqueda)
        guardarRecetas(resultadoBusqueda.data.drinks);


      };
      obtenerRecetas();

    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{
        infoReceta,
        buscarRecetas,
        guardarConsultar
      }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
