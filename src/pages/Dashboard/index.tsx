import React from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContent, LayoutWrapper } from '../../components/layout/styles';
import SideMenu from '../../components/sidemenu';
import TopMenu from '../../components/topmenu';

const Dashboard: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <SideMenu />
      <LayoutContent>
        <TopMenu />
        <div className='layout__content-main'>
          {children}
          <Outlet />
        </div>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Dashboard;
