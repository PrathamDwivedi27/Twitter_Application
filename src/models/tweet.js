import mongoose from "mongoose";

const tweetSchema=new  mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,"Tweet can't be more than 250 characters"]
    },
    likes:[{                                     //A tweet can have many likes   
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }
    ],
    comments:[                                   //comments for tweets
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
    timestamps:true
})  

const Tweet=mongoose.model('Tweet',tweetSchema);    


export default Tweet;