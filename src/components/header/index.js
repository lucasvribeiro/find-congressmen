import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import './index.css'

const { Header } = Layout;

const MainHeader = () => {

  return (
    <Header className = "header">
        {/* <img src = "C:/Users/lucas\Documents/GitHub/appmoove-test/public/logo192.png"  alt="Logo" height="90" width="90"/> */}
 
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', textAlign: 'left' }}
      >
        <Menu.Item key="1">Busca</Menu.Item>
        <Menu.Item key="2">Gráfico</Menu.Item>
      </Menu>
    </Header>
  );
}
  
export default MainHeader;