// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    keyWords:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // onInput(e){
    //   console.log(e)
    // },
    onConfirm(e){
      const keyWords = e.detail.value || this.data.keyWords;
      if(keyWords !== '读书'){
        wx.showToast({
          title:'只能搜索读书哦~',
          icon:'none'
        })
        return;
      }
      wx.navigateTo({
        url:`/pages/search/search?keyWords=${keyWords}`
      })
    },
    onBlur(e){
      const value = e.detail.value;
      this.setData({
        keyWords:value
      })
    },
    onFocus(){
      console.log(222)
    }
  }
})
