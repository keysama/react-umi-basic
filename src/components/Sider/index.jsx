import React,{ useState } from 'react';
import { Layout , Menu, Icon } from 'antd';

import Logo from '@/components/Logo';

const Sider = props => {

    const { children,show } = props;

    return (
        <Layout.Sider trigger={null} collapsible collapsed={show}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Logo >LOGO</Logo>  
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
    )
}

export default Sider;