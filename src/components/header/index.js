import React from 'react'
import { Layout, Menu } from 'antd';

import './index.css'

const { Header } = Layout;

const logo = require('../../images/logo.png');

const MainHeader = props => {

  return (
    <Header className = "header">
      <div className = "logo">
        <img src = {logo}  alt="Logo" width = "50" height = "50"/>
      </div>
        
 
      <Menu
        className = "menu"
        onSelect = {props.onChange}
        mode="horizontal"
        defaultSelectedKeys={[props.menu]}
        style={{ lineHeight: '64px', textAlign: 'left' }}
      >
        <Menu.Item key="1" className = "menu-item">Busca</Menu.Item>
        <Menu.Item key="2" className = "menu-item">Gráfico</Menu.Item>
      </Menu>
    </Header>
  );
}
  
export default MainHeader;