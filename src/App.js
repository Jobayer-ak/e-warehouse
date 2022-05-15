import "./App.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Items from "./Pages/Items/Items";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";

import ManageItems from "./Shared/ManageItems/ManageItems";
import MyItems from "./Shared/MyItems/MyItems";
import AddItem from "./Shared/AddItem/AddItem";
import ManageInventory from "./ManageInventory/ManageInventory";
import AddInventoryItem from "./AddInventoryItem/AddInventoryItem";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route
          path="/inventory/:id"
          element={<ItemDetail></ItemDetail>}></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        />
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }></Route>
        <Route
          path="/addInventoryItem"
          element={<AddInventoryItem></AddInventoryItem>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
