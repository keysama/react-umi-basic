import React,{ Component } from 'react';
import { connect } from 'dva';
import { setTimeout_promise,setState_promise,dispatch_promise } from '@/utils';

import Loading from '@/components/Loading';

class Init extends Component {
    constructor(){
        super();
        this.state = {
            loading : true
        }
    }

    componentDidMount = async () => {
        await setState_promise(this,{
            loading : true
        })
        //这里做一些全局的初始化操作

        await dispatch_promise(this.props.dispatch,{
            type : 'authority/checkLogin'
        })
        
        await setState_promise(this,{
            loading : false
        })
    }

    render(){
        const { loading } = this.state;
        const { children } = this.props;
        return (
            <Loading loading={loading}>
                { loading ? null : children}
            </Loading>
          );
    }
}

export default connect(null)(Init);