import React from 'react';
import styles from './index.css';
import { useState } from 'react';
import { Row,Col,Form } from 'antd';
import { compose } from 'redux';
import { connect } from 'dva';
import { dispatch_promise } from '@/utils';

import Loading from '@/components/Loading';
import TextInput from '@/components/formItems/TextInput';
import Submit from '@/components/formItems/Submit';

const LoginPage = props => {
  const { getFieldDecorator } = props.form;
  const [ loading,setLoading ] = useState(false);
  const [ loading_login,setLoading_login ] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    props.form.validateFields(async (err, values) => {
      await dispatch_promise(props.dispatch,{
        type : 'authority/login',
        payload : {
          username : values.username,
          password : values.password
        }
      })
      
    });
  };

  const checkInput = (name,value,callback) => {
    if(!value){
      callback('不能为空');
      return;
    }
    callback();
  }

  return (
    <Loading loading={loading}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col span={12} offset={6}>
            <TextInput 
            getFieldDecorator={getFieldDecorator} 
            name = "username" 
            label = "username"
            validator = { checkInput }
          />
          </Col>
          <Col span={12} offset={6}>
            <TextInput 
            getFieldDecorator={getFieldDecorator} 
            name = "password" 
            label = "password"
            type="password"
            validator = { checkInput }
          />
          </Col>
          <Col  span={12} offset={6}>
            <Submit loading={loading_login}>
              登录
            </Submit>
          </Col>
        </Row>

      </Form>
    </Loading>
  );
}

export default compose(
  Form.create({ name: 'login' }),
  connect(null)
)(LoginPage);