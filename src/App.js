import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar_aj from './pages_aj/Sidebar.js';
import Home_aj from './pages_aj/Home';
import Form_aj from './pages_aj/Form.js';
import Edit_aj from './pages_aj/Edit.js';
import User_aj from './pages_aj/User.js';
import Logout_aj from './pages_aj/logout.js'

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar_aj />
        <Routes>
          <Route path="/" element={<Home_aj />} />
          <Route path="/form" element={<Form_aj/>} />
          <Route path="/edit" element={<Edit_aj/>} />
          <Route path="/user" element={<User_aj />} />
          <Route path='/logout' element={<Logout_aj />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;