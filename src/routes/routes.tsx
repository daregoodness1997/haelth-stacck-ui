import { Routes, Route } from 'react-router-dom';
import Appointments from '../components/dashboard/clients/Appointments';
import Overview from '../components/dashboard/Overview';
import Login from '../pages/auth';
import Signup from '../pages/auth/Signup';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path='/dashboard/clients' element={<Appointments />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
