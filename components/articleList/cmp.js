// components/articleList/cmp.js
import { IndexModel } from "../../models/index"
import { SearchModel } from "../../models/searchModel"
const indexModel = new IndexModel();
const searchModel = new SearchModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail:Array,
    more:{
      type:String,
      value:'',
      observer:'loadMore' //监听more变化，加载数据
    },
    magzineId:{
      type:Number,
      value:0,
      observer:'hasMoreData' ///监听magzineId变化，把nomoreData 重置为false
    },
    keyWord:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    nomoreData:false,
    type:''
  },

  /**
   * 组件的方法列表
   */
  attached(){
    // getCurrentPages() //获取当前页面信息
    const currentPage = getCurrentPages();
    const index = currentPage.length - 1;
    let type = currentPage[index].route === "pages/search/search" ? 'search' : 'index';
    this.setData({
      type
    })
  },
  methods: {
    loadMore(){
      if(this._isLock() || this.data.nomoreData){
        return;
      }
      this._loadLock();
      this.getMoreData();
    },
    getMoreData(){
      let start = this.data.articleDetail.length;
      let moreData = null;
      if(this.data.type === 'search'){
        let word = this.data.keyWord;
        moreData = searchModel.getSearchArticleList(word,start)
      }else{
        let magzineId = this.data.magzineId;
        moreData = indexModel.getIndexArticleList(magzineId,start)
      }
      moreData.then(res =>{
        this._combine(res);
        this._unLocked();
      })
    },
    hasMoreData(){
      this.setData({
        nomoreData:false
      })
    },
    _combine(res){
      const combine = this.data.articleDetail.concat(res);
      if(this.data.articleDetail.length === combine.length){  //没有数据就不再加载
        this.setData({
          nomoreData:true
        })
      }else{
        this.setData({
          articleDetail:combine,
        })
      } 
    },
    _isLock(){
      return this.data.loading
    },
    _loadLock(){
      this.setData({
        loading:true
      })
    },
    _unLocked(){
      this.setData({
        loading:false
      })
    }
  }
})
