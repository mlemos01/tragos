import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
//creamos el context
export const CategoriasContext = createContext();

//creamos el provider que es donde se encuentran los  state y funciones
//se le pasa un prop que se transmite

/*
 <CategoriasContext.Provider   se invoca al context
 
            value={{     contiene los valores que se pasaran
            hola
            }}>
            {props.children}  indica que las propiedades se pasa a los hijos
        </CategoriasContext.Provider>
*/
const CategoriasProvider = (props) => {
  const [categorias, guardarCategorias] = useState([]);

  //construyo el llamado a la api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await Axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);
  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
export default CategoriasProvider;
