import {Spin} from 'antd';
import style from './index.css';

export default props => {
  console.log(33,props)
  const { loading , delay=300 , size="default" , tip='' , children } = props;
  return (
    <>
      <Spin
        delay={ delay  } //闪烁
        size={ size } //大小，small，default，large
        tip={ tip } //描述文案
        spinning={ loading }
        className={ style.container }
      >
        { loading ? null : children }
      </Spin>
    </>
  );
};
