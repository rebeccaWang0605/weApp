const strArr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const random = n => {
    let str = '';
    for(let i = 0; i < n; i++){
        let index = Math.floor(Math.random()* strArr.length);
        str += strArr[index];
    }
    return str;
}

export { random }