import React, { createContext, useEffect, useState } from 'react';
import Axios from "axios";

const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idreceta, guardarIdreceta] = useState(null);

    return (
        <ModalContext.Provider
            value={{
                guardarIdreceta
            }}>

            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider; 