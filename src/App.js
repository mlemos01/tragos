import React, { Fragment } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import "./index.css";
import "./Bootstrap.min.css";
import CategoriasProvider from "./Context/CategoriasContext";
import RecetasProvider from "./Context/RecetasContext";
import ListarRecetas from "./Components/ListarRecetas";
import ModalProvider from "./Context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container">
            <div className="row">
              <Form />
            </div>
            <ListarRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
