import React, { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/layout/AddLogModal";
import EditLogModal from "./components/layout/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import { Provider } from "react-redux";
import store from "./store";
import TechListModal from "./components/techs/TechListModal";

function App() {
  useEffect(() => {
    //Init Materialize Js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </div>
    </Provider>
  );
}

export default App;
