import {Request} from "../utils/request"

class IndexModel extends Request{
    getIndexArticleList(magzineId=0,start=0){
        return this.getData({url:`/getIndexArticleList/${magzineId}/${start}`})
    }
    getRecommendInfo(magzineId=0){
        return this.getData({url:`/getRecommendInfo/${magzineId}`})
    }
    getMarkTypeList(magzineId=0){
        return this.getData({url:`/getMarkTypeList/${magzineId}`})
    }
}

export { IndexModel }