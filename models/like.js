class LikeModel {
    getLikeList(){
        return wx.getStorageSync('likeList') || [];
    }
    addLikeList(article){
        const likeList = this.getLikeList();
        // likeList.forEach(item =>{
        //     if(item.artId === article.artId){
        //         return;
        //     }
        // })
        likeList.unshift(article);
        this.setLikeList(likeList);
    }
    setLikeList(likeList){
        wx.setStorageSync('likeList',likeList)
    }
    removeLikeList(artId){
        const likeList = this.getLikeList();
        let myIndex = 0;
        likeList.forEach((item,index) =>{
            if(item.artId === artId){
                myIndex = index;
            }
        })
        likeList.splice(myIndex,1);
        this.setLikeList(likeList);
    }
    getLikeStatus(artId){
        const likeList = this.getLikeList();
        let likeStatus = false;
        likeList.forEach( item =>{
            if(item.artId === artId){
                likeStatus = true;
            }
        })
        return likeStatus
    }
}

export { LikeModel }