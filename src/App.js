import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/MainLayout';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/forgot-password" element={< ForgetPassword/>} />
        <Route path="/admin" element={< MainLayout/>}>
          <Route index element={< Dashboard/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
