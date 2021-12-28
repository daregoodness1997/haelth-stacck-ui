import { Routes, Route } from 'react-router-dom';
import Appointments from '../components/dashboard/clients/Appointments';
import ClientDetails from '../components/dashboard/clients/ClientDetails';
import Clients from '../components/dashboard/clients/Clients';
import ClientQuickForm from '../components/dashboard/clients/forms/ClientQuickForm';
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
          <Route path='/dashboard/clients' element={<Clients />} />
          <Route
            path='/dashboard/clients/appointments'
            element={<Appointments />}
          />
          <Route
            path='/dashboard/clients/client'
            element={<ClientQuickForm />}
          />
        </Route>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
