// components/subscribe/cmp.js
import { SubscribeList }  from '../../models/subscribeList'
const subscribeList = new SubscribeList();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    className:'common',
  },

  /**
   * 组件的方法列表
   * 
   */
  attached(){
    const typeId = this.data.tagId;
    let className = subscribeList.getStatus(typeId);
    this.setData({
      className
    })
  },
  methods: {
    onTap(){
      const mark = {
        type:this.data.tag,
        typeId:this.data.tagId
      }
      if(this.data.className === 'common'){
        subscribeList.addSubscribeList(mark);
      }else{
        subscribeList.removeSubscribeList(mark.typeId);
      }
      this.toggleClass();
      this.triggerEvent('subscribe')
    },
    toggleClass(){
      let className = 'common';
      if(this.data.className === 'common'){
        className = 'subscribe';
      }else{
        className = 'common';
      }
      this.setData({
        className
      })
    }
  }
})
