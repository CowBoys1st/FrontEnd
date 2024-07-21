import './App.css'
import {Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import AboutPage from './pages/about';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="/about" element={ <AboutPage /> }></Route>
      </Routes>
    </>
  )

}

export default App;
