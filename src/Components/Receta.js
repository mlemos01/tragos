import React, { useCallback, useContext } from 'react';
import { ModalContext } from '../Context/ModalContext';


const Receta = ({ receta }) => {

    const { guardarIdreceta } = useContext(ModalContext);
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdreceta(receta.idDrink)
                        }}>
                        Ver receta
                        </button>
                </div>
            </div>
        </div>

    );
}

export default Receta;