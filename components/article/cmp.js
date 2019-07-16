// components/article/cmp.js
import { LikeModel } from '../../models/like'
const likeModel  = new LikeModel();
 Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
    //  //九图数据
    //  imgArr:['https://ps.ssl.qhmsg.com/bdr/_240_/t0183f41e934770c6d8.jpg',
    //  'https://ps.ssl.qhimg.com/sdmt/224_162_100/t01e974b6926c52ef04.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/197_162_100/t0149197391487e5ce2.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/224_162_100/t016957ae96ac897e18.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/229_162_100/t0135e5ba16bd6ad4c7.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/198_162_100/t010970d8e825a93209.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/221_162_100/t0109617ea061fdd1cc.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/229_162_100/t0135e5ba16bd6ad4c7.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/224_162_100/t01e974b6926c52ef04.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/224_162_100/t016957ae96ac897e18.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/229_162_100/t0135e5ba16bd6ad4c7.webp',
    //  'https://ps.ssl.qhimg.com/sdmt/198_162_100/t010970d8e825a93209.webp',
    //  ]
  },

  /**
   * 组件的方法列表
   */
  attached(){
    const article = this.data.article;
    const artId = article.artId;
    const  likeStatus = likeModel.getLikeStatus(artId);
    this.setData({
      likeStatus
    })
  },
  methods: {
    onLike(e){
     const like = e.detail.like;
     const article = this.data.article;
     const artId = article.artId;
     if(like){
      likeModel.addLikeList(article);
     }else{
       likeModel.removeLikeList(artId);
     }
    },
  }
})
