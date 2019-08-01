
export const setState_promise =  (context,props) => {//setState转换promise，解决异步回掉太多的问题
    return new Promise(resolve => {
        context.setState({
            ...props
        },() => {
            resolve(true)
        })
    })
};
export const dispatch_promise = (context,props) => {//dispatch转换promise，解决异步回掉太多的问题
    return new Promise(resolve => {
        context.props.dispatch ({
        ...props,
        callback:(data)=>{resolve(data)}
        });
    })
};
export const setTimeout_promise = (timeout,data) => {//定时器，用来测试
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, timeout);
    })
}
