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
import SingUP from "./header/singUp/SingUp";
import ShowAndHide from "./components/showAndHide/ShowAndHide";
import LogIn from "./header/logIn/LogIn";
import Cart from "./extraPages/cart/Cart";
import DrawerNavbar from "./drawerNavbar/DrawerNavbar";
import PrivateRoutes from "./components/protectedRoute/PrivateRoutes";
import { PrivateRoutesForLogInAndSingUp } from "./components/protectedRoute/PrivateRoutes";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ShowAndHide>
          <DrawerNavbar/>
          <Header />
          <Navbar />
        </ShowAndHide>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<PrivateRoutes />}>
          <Route path="/AddBooks" element={<AddBooks />} />
          <Route path="/edit/:id" element={<EditBooks />} />
          </Route>
          <Route element={<PrivateRoutesForLogInAndSingUp/>}>
          <Route path="/singUp" element={<SingUP />} />
          <Route path="/logIn" element={<LogIn />} />
          </Route>
        </Routes>
        <ShowAndHide>
          <Footer />
        </ShowAndHide>
      </BrowserRouter>
    </div>
  );
}

export default App;


