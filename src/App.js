import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import SignIn from "./Pages/Auth/SignIn/SignIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Home from "./Pages/Home/Home/Home";
import Inventories from "./Pages/Inventories/Inventories/Inventories";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shered/Header/Header";
import Update from "./Pages/Update/Update";
import "react-toastify/dist/ReactToastify.css";
import { ScaleLoader } from "react-spinners";
import { useEffect, useState } from "react";
import Blogs from "./Pages/Blogs/Blogs";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <ScaleLoader color="red" size={150} />
        </div>
      ) : (
        <>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/inventory/:id"
              element={
                <RequireAuth>
                  <Update></Update>
                </RequireAuth>
              }
            ></Route>

            <Route
              path="/add-items"
              element={
                <RequireAuth>
                  <AddItems></AddItems>
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/manage-items"
              element={
                <RequireAuth>
                  <Inventories></Inventories>
                </RequireAuth>
              }
            ></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/blog" element={<Blogs></Blogs>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route
              path="/my-items"
              element={
                <RequireAuth>
                  <MyItems></MyItems>
                </RequireAuth>
              }
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
