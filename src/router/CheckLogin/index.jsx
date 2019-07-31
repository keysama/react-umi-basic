import React,{ useState } from 'react';
import { connect } from 'dva';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';

const CheckLogin = (props) => {
  useState(()=>{
      if(!props.userInfo.id){
        message.error('you have to login')
      }
  })

  return (
    <>
    {
      !props.userInfo.id ? <Redirect to="/login" /> : props.children
    }
    </>
  );
}

const mapState = state => ({
  userInfo : state.authority.userInfo
})

export default connect(mapState)(CheckLogin);