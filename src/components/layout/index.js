import React from 'react'
import { Layout } from 'antd';

import './index.css'

import Header from '../header/index'
import Footer from '../footer/index'

const { Content } = Layout;

const MainLayout = props => {

  return (
    <div className = "layout">
      <Layout>
        <Header />
        <Content>{props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
  
export default MainLayout;