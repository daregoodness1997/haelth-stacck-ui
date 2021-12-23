import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth';
import Signup from './pages/auth/Signup';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
