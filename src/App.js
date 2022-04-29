import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Inventories/Inventories/Inventories';
import Header from './Pages/Shered/Header/Header';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Update></Update>}></Route>
        <Route path='/inventory' element={<Inventories></Inventories>}></Route>
      </Routes>
    </div>
  );
}

export default App;
