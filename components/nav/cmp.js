// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    magzineTypeList:['轻芒','兴趣','物质','世界','新事','灵魂'],
    magzineIndex:0,
    activeId:'magzine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      const index = e.currentTarget.dataset.index;
      this.setData({
        magzineIndex:index,
        activeId:`magzine${index == 0 ? 0 : index-1}`
      })
      this.triggerEvent('changePage',{index})
    }
  }
})
