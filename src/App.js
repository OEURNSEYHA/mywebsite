import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Page from "./Component/Page";
import { Routes, Route, } from "react-router-dom";
import Page1 from "./Component/Page1";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <div className="App">
      
      <Header />

      <Routes>
        <Route path="/" exact element={<Page />} />
        <Route path="/aboutme" element={<Page1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
