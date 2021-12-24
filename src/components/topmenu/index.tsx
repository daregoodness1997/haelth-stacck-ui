import React from 'react';
import { Avatar, Profile, TopMenuWrapper } from './styles';
// import { avatar } from '../../assets/images/img_avatar.png';

const TopMenu = () => {
  return (
    <TopMenuWrapper>
      <div className='breadcrumb'>Client</div>
      <Profile>
        <span>@workspace.com</span>
        <i className='bi bi-bell-fill'></i>
        <Avatar src='/img_avatar.png' alt='' />
      </Profile>
    </TopMenuWrapper>
  );
};

export default TopMenu;
