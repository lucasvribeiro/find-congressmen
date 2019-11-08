import React from 'react'
import { Layout } from 'antd';

import Header from '../header/index'
import Footer from '../footer/index'

import './index.css'

const { Content } = Layout;

const MainLayout = props => {

    return (

        <div className = "layout">
            <Layout>
                <Header onChange = { props.onChange } menu = { props.menu }/>
                <Content> { props.children } </Content>
                <Footer />
            </Layout>
        </div>

    );
}
  
export default MainLayout;