import { LikeRepository,TweetRepository } from "../repository/index.js";


class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        // console.log(modelId);
        if(modelType=='Tweet'){
            var likeable=await this.tweetRepository.find(modelId);         //pehle se jo likes hai wo bhi aa jaaye.
            console.log(likeable);

        }
        else if(modelType=='Comment'){

        }
        else {
            throw new Error('Invalid model type');
        }

        const exists=await this.likeRepository.findByUserAndLikeable({                //ye kar rhe hai ki check kar rhe hai ki user ne usspe tweet/comment pe like kiya hai ki nhi. toggle option ke liye
            user:userId,    
            onModel:modelType,                  
            likeable:modelId                //kispe like kiya wo hai likeable
        })
        if(exists){    
            console.log(exists);                             //agar hai to remove option do 
            likeable.likes.pull(exists.id);
            await likeable.save();
            await this.likeRepository.destroy(exists.id);

            var isRemoved=true;
        }

        else {                      //nhi to like create karo
            const newLike=await this.likeRepository.create({
                user:userId,    
                onModel:modelType,
                likeable:modelId
        })
        likeable.likes.push(newLike);           //this push and pull is provided by mongoose
        await likeable.save();
        
        var isRemoved=false;

        }

        return isRemoved;
    }
}

export default LikeService;