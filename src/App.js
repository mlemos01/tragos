import React, { Fragment } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import "./index.css";
import "./Bootstrap.min.css";
import CategoriasProvider from "./Context/CategoriasContext";

function App() {
  return (
    <CategoriasProvider>
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <Form />
          </div>
        </div>
      </Fragment>
    </CategoriasProvider>
  );
}

export default App;
