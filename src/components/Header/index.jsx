import React from 'react';
import { Layout } from 'antd';

const Header = props => {

    const { children } = props;

    return (
        <Layout.Header style={{ background: '#fff', padding: 0 }}>
            {
                children
            }
        </ Layout.Header>
    )
}

export default Header;