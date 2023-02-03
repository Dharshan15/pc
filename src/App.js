import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./login";
import Register from "./signup.js";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
      </Routes>
      
  </BrowserRouter>
    </div>
  );
}

export default App;
