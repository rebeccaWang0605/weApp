// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   * 
   */
  
  
  data: {
    userInfo:{},
    getAuthor:false,
    likeList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  attached(){
    
  },
  onLoad: function (options) {
    this.userAuthorized();
  },
  userAuthorized(){
    wx.getSetting({
      success:res =>{
        const getAuthor = res.authSetting['scope.userInfo'];
        if(getAuthor){
          wx.getUserInfo({
            success: res =>{
              this.setData({
                userInfo:res.userInfo,
                getAuthor:true
              })
              this.getMyLike();
            }
          })
        } 
      }
    })
  },
  onGetUserInfo(e){
    const userInfo = e.detail.userInfo;
    if(userInfo){
      this.setData({
        userInfo,
        getAuthor:true
      })
      this.getMyLike();
    }
  },

  getMyLike(){
    const likeList = wx.getStorageSync('likeList') || [];
    this.setData({
      likeList
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(this.data.getAuthor){
      this.getMyLike();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})