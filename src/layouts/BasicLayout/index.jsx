import React, { Component } from 'react';
import style from './index.css';

import Header from '@/components/Header';
import Sider from '@/components/Sider';
import Loading from '@/components/Loading';

import { Layout } from 'antd';

import { setTimeout_promise } from '@/utils';

const { Content } = Layout;

// import Link from 'umi/link';
// const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component{
  constructor(){
    super();
    this.state = {
      collapsed : false,
      loading : true
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount = () => {
    this.init()
  }

  init = async () => {
    await setTimeout_promise(1000)
    this.setState({
      loading : false
    })
  }

  render(){
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <Loading loading={loading}>
        <Layout className={style.container}>
          <Sider />
          <Layout>
            <Header />
            <Content className={style.content}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Loading>
    )
  }
}


export default BasicLayout;
