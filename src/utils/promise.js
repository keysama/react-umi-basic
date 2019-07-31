//setState转换promise，解决异步回掉太多的问题
export const setState_promise = (context,props) => {
    return new Promise(resolve => {
        context.setState({
            ...props
        },() => {
            resolve(true)
        })
    })
}

//dispatch转换promise，解决异步回掉太多的问题
export const dispatch_promise = (context,props) => {
    return new Promise(resolve => {
        context.props.dispatch ({
        ...props,
        callback:(data)=>{resolve(data)}
        });
    })
}


//定时器，用来测试
export const setTimeout_promise = (timeout,data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, timeout);
    })
}