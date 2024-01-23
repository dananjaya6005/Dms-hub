import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined , LaptopOutlined ,CalendarOutlined,
   DashboardOutlined , UserAddOutlined ,DollarOutlined ,RadarChartOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [

  // { type: 'divider' },

  getItem('Dashboard', 'dashboard', <DashboardOutlined />),
  getItem('Clients', 'client_reg', <UserAddOutlined />, [getItem('Client Register', 'clientReg'), getItem('All Clients', 'allClients')]),
  getItem('Accounts', 'accounts', <DollarOutlined />),
  getItem('Projects', 'projects', <AppstoreOutlined />),
  getItem('Campaigns', 'campaigns', <MailOutlined />),

  { type: 'divider'},
  getItem('Creative', 'creative', <RadarChartOutlined/>),
  getItem('Development', 'develepment', <LaptopOutlined />),
  getItem('Events', 'event', <CalendarOutlined />),
  getItem('Support', 'support', <SettingOutlined />),

];

const SideMenu: React.FC = () => {

  const navigate = useNavigate();



  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    if (e.key === 'clientReg') {
      navigate('dashboard/clientsReg');
    }
    else if (e.key === 'allClients') {
      navigate('dashboard/clients');
    }
    else if (e.key === 'dashboard') {
      navigate('/dashboard');
    }


  };

  return (

    <ConfigProvider
    theme={{
      components: {
        Menu: {
          itemSelectedBg : '#ffe6cc',
          itemSelectedColor : '#ff6600',
          itemHoverBg : '#ffe6cc',
        },
      },
    }}
  >

    <Menu
     className='h-screen bg-orange-50'
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </ConfigProvider>
  );
};

export default SideMenu;