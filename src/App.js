import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
