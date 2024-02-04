import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './pages/Sidebar.js';
import Home from './pages/Home';
import Form from './pages/Form.js';
import Edit from './pages/Edit.js';
import User from './pages/User.js';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;