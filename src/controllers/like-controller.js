import LikeService from "../services/like-service.js";

const likeService=new LikeService();


export const toggleLike=async(req,res)=>{
    try {
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:"Successfully toggled the like"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            data:{},
            err:error,
            message:'Something Went Wrong'
        })
    }
}