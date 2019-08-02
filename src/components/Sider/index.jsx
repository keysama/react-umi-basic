import React from 'react';
import { Layout , Menu, Icon } from 'antd';
import Link from 'umi/Link';

const Sider = props => {

    const { children,show,menuList,selectedKeys } = props;

    return (
        <Layout.Sider trigger={null} collapsible collapsed={show}>
          <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
            {children}
            {
              menuList.map(item => item.hidden ? null
              :(
                <Menu.Item key={ item.path }>
                  <Link to={ item.path }>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Layout.Sider>
    )
}

export default Sider;