// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc:String,
    imgSrc:String,
    mainTitle:String,
    duration:String,
    videoId:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster:false
  },

  /**
   * 组件的方法列表
   */
  // lifetimes:{ //优先级最高
  //   attached(){
  //     this._getVideoInfo();
  //   },
  // },
  attached(){
    this._getVideoInfo();
  },
  methods: {
    onPlay(){
      this._toggleVideoPoster();
      this.videoContext.play();
    },
    onMaskTap(){
      this._toggleVideoPoster();
      this.videoContext.seek(0);//从头开始播放
      this.videoContext.stop();
    },
    onVideoEnd(){ //bindended  监听结束
      this._toggleVideoPoster();
    },
    _toggleVideoPoster(){ //私有方法下划线
      this.setData({
        showPoster:!this.data.showPoster
      })
    },
    _getVideoInfo(){
      const id = this.data.videoId;
      this.videoContext = wx.createVideoContext(id,this);
    }
  }
})
