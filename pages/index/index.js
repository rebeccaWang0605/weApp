// pages/index/index.js
 import { IndexModel }  from "../../models/index"
 import { random } from "../../utils/random"
 const indexModel = new IndexModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList:[],
    recommendInfo:{},
    markTypeList:[],
    getMore:'',
    magzineId:0,
    loading:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(this.data.magzineId);
  },

  getData(magzineId){
    const articleList = indexModel.getIndexArticleList(magzineId);
    const recommendInfo = indexModel.getRecommendInfo(magzineId);
    const markTypeList = indexModel.getMarkTypeList(magzineId);
    Promise.all([articleList,recommendInfo,markTypeList]).then(res=>{
      this.setData({
        articleList:res[0],
        recommendInfo:res[1],
        markTypeList:res[2],
        loading:false
      })
    })
  },

  onReachBottom(){
    this.setData({
      getMore:random(20)
    })
  },
  toCatelog(){
    wx.switchTab({   //跳转到tabBar页面，wx.navigateTo不能跳转到tabBar页面
      url:'/pages/catelog/catelog'
    })
  },
  change(e){
    this.setData({
      magzineId:e.detail.index,
      articleList:[],
      recommendInfo:{},
      markTypeList:[],
    })

    // wx.pageScrollTo(Object object)
    // Object object
    // 属性	       类型	    默认值	  必填	     说明
    // scrollTop	number		          是	  滚动到页面的目标位置，单位 px
    // duration	  number	  300	      否	  滚动动画的时长，单位 ms
    // success	  function		        否	  接口调用成功的回调函数
    // fail	      function		        否	  接口调用失败的回调函数
    // complete	  function		        否	  接口调用结束的回调函数（调用成功、失败都会执行）

    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })
    this.getData(this.data.magzineId);
  }
 
})