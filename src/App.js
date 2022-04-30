import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import SignIn from './Pages/Auth/SignIn/SignIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Inventories/Inventories/Inventories';
import MyItems from './Pages/MyItems/MyItems';
import Header from './Pages/Shered/Header/Header';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
       
        <Route path='/add-items' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/manage-items' element={
          <RequireAuth>
            <Inventories></Inventories>
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/my-items' element={
        <RequireAuth>
          <MyItems></MyItems> 
        </RequireAuth>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
