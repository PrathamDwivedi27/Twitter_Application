const Tweet=require('../models/tweet');

class TweetRepository{
    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log (error);
        }
    }

    async get(id){                                          //when you will use get for comments it will only show you object model not whole comment 
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log (error);
        }
    }

    async update(tweetId,data){
        try {
            const tweet=await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
            return tweet;
        } catch (error) {
            console.log (error);
        }
    }

    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log (error);
        }
    }

    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'comment'}).lean();     //if you dont do lean it will be return as moongose object not js object. It is not necessary its just an optimised thing to do .       //becoz its an array that why we have to do like this
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset,limit){             //sirf find karoge to saare aa jayenge
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=TweetRepository;