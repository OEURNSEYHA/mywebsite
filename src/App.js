import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Page from "./Component/Page";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Component/Page1";
import NotFound from "./Component/NotFound";
import Introl from "./Component/Introl";
import Skill from "./Component/Skill";
import Habbit from "./Component/Habbit";
import ButtonDragDrpMenu from "./Component/ButtonDragDrpMenu";


function App() {
  return (
    <div className="App">
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" exact element={<Page />} />
        <Route path="/aboutme" element={<Page1 />}>
          <Route path="" element={<Introl />} />
          <Route path="skill" element={<Skill />} />
          <Route path="habbit" element={<Habbit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Floating Menu */}
      <ButtonDragDrpMenu />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
