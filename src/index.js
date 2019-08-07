import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import "reset.css";
import "./styles.css";
import Content from "./layout/Content/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
