
import './App.css';
import Header from'./Component/Header'
import Footer from'./Component/Footer'
import Page from './Component/Page'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/>

    <Routes>
      <Route path='/' element={<Page/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
