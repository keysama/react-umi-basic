import React from 'react';
import { connect } from 'dva';
import { Redirect } from 'react-router-dom';

const CheckLogout = (props) => {

  return (
    <>
    {
      !props.userInfo.id?props.children:<Redirect to="/" />
    }
    </>
  );
}

const mapState = state => ({
  userInfo : state.authority.userInfo
})

export default connect(mapState)(CheckLogout);