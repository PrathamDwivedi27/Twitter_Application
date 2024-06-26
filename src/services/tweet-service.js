import {TweetRepository,HashtagRepository} from '../repository/index.js'


class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    async create(data){
        const content =data.content;
        console.log(content);
        const tags=content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substring(1))    //to identify hashtags. It will give # also to remove that
        .map((tag)=>tag.toLowerCase());  // It is necessary to do it because coding and coDinG
        
        const tweet=await this.tweetRepository.create(data);

        let alreadyPresentTags=await this.hashtagRepository.findByName(tags);
        
        let titleOfPresentTags=alreadyPresentTags.map(tags=>tags.title);

        let newTags=tags.filter(tag=>!titleOfPresentTags.includes(tag)); 
        newTags=newTags.map(tag=>{
            return {title:tag,tweets:[tweet.id]}
        });
        
        const response=await this.hashtagRepository.bulkCreate(newTags);            //ye hum ye kar rhe hai ki jo log ka same tweet ya same hashtag hai unko bhi to jodna padega unhi hashtags mein . isliye push kar rhe hai hai
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        });

        return tweet;
    }

    async getTweet(tweetId){
        const tweet=await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

export default TweetService;