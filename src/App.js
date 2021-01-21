import React from "react";
import "./App.css";
import Header from "./Header";
import Products from "./Products_new";

const App = ()=> (
      <div className="app">
        <div className="shop">
          <Header />
          <Products />
        </div>
      </div>
    );
  

export default App;