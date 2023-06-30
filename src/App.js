import Home from "./pages/home/Home"
import Categories from "./pages/categories/Categories"
import About from "./pages/about/About"
import Contect from "./pages/contect/Contect"
import './App.css';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBooks from "./extraPages/addBooks/AddBooks"
import EditBooks from "./showBooks/editBooks/Edit"
import Footer from "./footer/Footer"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/AddBooks" element={<AddBooks />} />
          <Route path="/edit/:id" element={<EditBooks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
