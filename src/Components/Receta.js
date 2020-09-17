import React, { useContext, useState } from 'react';
import { ModalContext } from '../Context/ModalContext'
//importamos el componente modal de Material-ui para no importar toda la libreria
import Modal from '@material-ui/core/Modal';
//importamos el componente que nos permite escribir css estilo javascript
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';


//ubica el modal al centro
function getModalStyle() {

    const top = 50;
    const left = 50;

    return {

        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,


    };
}

const useStyles = makeStyles(theme => ({

    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        padding: theme.spacing(2, 4, 3),
        overflowY: 'scroll',
        height: '100%',

    },
}));



const Receta = ({ receta }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const { guardarIdreceta, infoReceta, guardarReceta } = useContext(ModalContext);

    const mostrarIngredientes = infoReceta => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (infoReceta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={i}>{infoReceta[`strIngredient${i}`]} {infoReceta[`strMeasure${i}`]}</li>
                )
            }


        }
        return ingredientes;

    }
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
                            handleOpen();
                        }}>
                        Ver receta
                        </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            guardarIdreceta(null);
                            guardarReceta({});
                        }}

                        openAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 300,
                        }}>

                        <div style={modalStyle} className={classes.paper}>

                            <h2>{infoReceta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {infoReceta.strInstructions}
                            </p>


                            <img className="img-fluid my4" src={infoReceta.strDrinkThumb} alt="" />

                            <h3>Ingredientes y cantidades</h3>
                            <ul>{mostrarIngredientes(infoReceta)}</ul>



                        </div>
                    </Modal>

                </div>
            </div>
        </div >

    );
}

export default Receta;