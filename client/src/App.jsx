import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Header from "./components/header/Header";

export default function App(){
  return (
  <Router>
    <Header />
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/login' element = {<Login />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/register' element = {<Register />} />
    </Routes>
  </Router>
  );
}