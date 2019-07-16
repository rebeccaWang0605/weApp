// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array,
    mainTitle:String
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
    onTap(e){
      const index = e.currentTarget.dataset.index;
      wx.previewImage({
        urls:this.data.imgArr,
        current:this.data.imgArr[index]
      })
    }
  }
})
