import React, { useContext } from 'react';
import { RecetasContext } from '../Context/RecetasContext';
import Receta from './Receta';

const ListarRecetas = () => {

    const { recetas } = useContext(RecetasContext);
    console.log(recetas)
    return (
        <div className="row mt-5">
            {
                recetas.map(receta => (
                    <Receta
                        key={receta.idDrink}
                        receta={receta}
                    />
                ))
            }
        </div>
    );
}

export default ListarRecetas;

/*

*/