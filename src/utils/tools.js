export const timeFilter = (timeStemp) => {//时间戳转换
    var now = new Date(parseInt(timeStemp)),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
}
