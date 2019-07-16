import {Request} from "../utils/request"

class SearchModel extends Request{
    getSearchArticleList(words,start=0){
        return this.getData({
            url:`/searchArticleList/${words}/${start}`
        })
    }
    getSearchRecommendInfo(words){
        return this.getData({
            url:`/searchArticleRecommend/${words}`
        })
    }
}

export { SearchModel }