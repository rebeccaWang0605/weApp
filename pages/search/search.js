// pages/search/search.js
import { SearchModel } from '../../models/searchModel'
import { random } from '../../utils/random'
const searchModel = new SearchModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyWords:'',
    searchArticleList:[],
    tag:'',
    recommend:[],
    more:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const keyWords = options.keyWords;
    this.setData({
      keyWords
    })
    this.getData(keyWords);
  },

  getData(words){
    const searchArticleList = searchModel.getSearchArticleList(words);
    const searchRecommendInfo = searchModel.getSearchRecommendInfo(words);

    Promise.all([searchArticleList,searchRecommendInfo]).then(res=>{
      this.setData({
        searchArticleList:res[0],
        tag:res[1].tag,
        recommend:res[1].recommend
      })
    })
    
  },

  onReachBottom(){
    this.setData({
      more:random(20)
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
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})