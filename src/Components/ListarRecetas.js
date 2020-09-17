import React, { useContext } from 'react';
import { RecetasContext } from '../Context/RecetasContext';
import Receta from './Receta';

const ListarRecetas = () => {

    const { infoReceta } = useContext(RecetasContext);

    return (
        <div className="row mt-5">
            {
                infoReceta.map(receta => (
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