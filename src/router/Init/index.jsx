import React,{ Component } from 'react';
import { connect } from 'dva';
import { setTimeout_promise,setState_promise } from '@/utils/promise';


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
        //这里做一些初始化操作

        await setTimeout_promise(2000)
        
        await setState_promise(this,{
            loading : false
        })
    }

    render(){
        const { loading } = this.state;
        const { children } = this.props;
        return (
            <Loading spinning={loading}>
                { loading ? null : children}
            </Loading>
          );
    }
}

export default connect(null)(Init);