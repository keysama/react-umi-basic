export const setStore = (name, content) => {
    if (!name) return;//设置localStorage
    if (typeof content !== 'string') {
        content = JSON.stringify (content);
    }
    window.localStorage.setItem (name, content);
};
export const getStore = name => {//获取localStorage
    if (!name) return;
    return window.localStorage.getItem (name);
}
