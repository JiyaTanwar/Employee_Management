import './App.css';
import Header from "./pages/header/Header";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/no-match/NoMatch';
import PostEmployee from './pages/employee/PostEmployee';
import UpdateEmployee from './pages/employee/UpdateEmployee';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<PostEmployee/>} />
        <Route path="/employees/:id" element={<UpdateEmployee/>} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </>
  );
}

export default App;
