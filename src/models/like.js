import mongoose from "mongoose";

const likeSchema=new mongoose.Schema({
    onModel:{                               //kis model pe base hai. Hum ya to tweet pe like kar sakte hai ya comment pe 
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'               //jaise peeche ref use kar rhe the na hashtag mein ki tweet se reference hai . waise hi jab jyade cheez pe reference dena ho to refpath. Hum jo bhi like karenge uska tweetid ya comment id store karenge.
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})


const Like=mongoose.model('Like',likeSchema);

export default Like;