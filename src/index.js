const express=require('express');
const app=express();
const connect=require('./config/database');

const {TweetRepository}=require('./repository/index');
const TweetService=require('./services/tweet-service');
const Comment=require('./models/comment')

app.listen(3000,async ()=>{
    console.log("Server started at 3000");
    await connect();
    console.log('Database is connected');

    let service=new TweetService();
    const tweet=await service.create({
        content:'This is #Fun , #development. But I love to do #open_src '
    })
    // console.log(tweet);

    
    
})