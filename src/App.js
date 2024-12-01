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

import emailjs from "emailjs-com";
import {UAParser} from "ua-parser-js";
import { useEffect } from "react";

function getDeviceInfo() {
  const parser = new UAParser();
  const result = parser.getResult();
  return {
    browser: `${result.browser.name} ${result.browser.version}`,
    os: `${result.os.name} ${result.os.version}`,
    device: result.device.model || "Unknown Device",
  };
}

function sendDeviceInfo() {
  const deviceInfo = getDeviceInfo();

  const templateParams = {
    browser: deviceInfo.browser,
    os: deviceInfo.os,
    device: deviceInfo.device,
  };

  emailjs
    .send(
      "Seyha*8888", // Replace with your EmailJS Service ID
      "template_5t8b8vh", // Replace with your Template ID
      templateParams,
      "ukOVGovFRQ568udoc9s6J" // Replace with your User ID
    )
    .then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
      },
      (err) => {
        console.error("Failed to send email. Error:", err);
      }
    );
}


function App() {
  
  useEffect(() => {
    sendDeviceInfo();
  }, []);
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
