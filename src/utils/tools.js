//一些常用的函数

//时间戳转换
export const timeFilter = (timeStemp) => {
    var now = new Date(parseInt(timeStemp)),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
}