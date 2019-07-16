class SubscribeList{
    getSubscribeList(){
        return wx.getStorageSync('subscribeList') || [];
    }
    addSubscribeList(tagList){
        const list = this.getSubscribeList();
        list.push(tagList);
        this.setSubscribeList(list);
    }
    setSubscribeList(list){
        wx.setStorageSync('subscribeList',list);
    }
    removeSubscribeList(typeId){
        const list = this.getSubscribeList();
        let myIndex = 0;
        list.forEach((item,index) =>{
            if(item.typeId === typeId){
                myIndex = index;
            }
        })
        list.splice(myIndex,1);
        this.setSubscribeList(list);
    }
    getStatus(typeId){
        const list = this.getSubscribeList();
        let className = 'common';
        list.forEach(item =>{
            if(item.typeId === typeId){
                className = 'subscribe'
            }
        })
        return className;
    }
}

export { SubscribeList }