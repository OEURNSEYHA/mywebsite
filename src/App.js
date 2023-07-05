
import './App.css';
import Header from'./Component/Header'
import Footer from'./Component/Footer'
import Page from './Component/Page'
import { Routes, Route } from 'react-router-dom';
import Page1 from './Component/Page1';

function App() {
  return (
    <div className="App">
    <Header/>

    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/aboutme' element={<Page1/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
