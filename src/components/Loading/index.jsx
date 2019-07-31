import {Spin} from 'antd';

export default props => {
  return (
    <>
      <Spin
        delay={props.delay || 300} //闪烁
        size={props.size || 'default'} //大小，small，default，large
        tip={props.tip || ''} //描述文案
        spinning={props.spinning}
        style ={props.children?{}:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100px"}}
      >
        {props.children}
      </Spin>
    </>
  );
};
